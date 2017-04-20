import { drawing as draw, throttle } from '@progress/kendo-drawing';

import { RootElement, Title, CategoryAxis, DateCategoryAxis, Point } from '../core';

import Highlight from './highlight';
import ChartPlotArea from './api-elements/chart-plotarea';
import ChartAxis from './api-elements/chart-axis';
import Pannable from './pan-and-zoom/pannable';
import ZoomSelection from './pan-and-zoom/zoom-selection';
import MousewheelZoom from './pan-and-zoom/mousewheel-zoom';
import Legend from './legend/legend';
import PlotAreaFactory from './plotarea/plotarea-factory';
import Selection from './selection';
import SeriesBinder from './series-binder';
import Tooltip from './tooltip/tooltip';
import SharedTooltip from './tooltip/shared-tooltip';
import CategoricalPlotArea from './plotarea/categorical-plotarea';
import PlotAreaBase from './plotarea/plotarea-base';
import { ChartService, DomEventsBuilder } from '../services';
import getField from './utils/get-field';
import isDateAxis from './utils/is-date-axis';
import getDateField from './utils/get-date-field';

import { X, Y, VALUE, DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../common/constants';
import { addClass, Class, setDefaultOptions, deepExtend, defined, isObject, isFunction, elementSize, elementOffset,
    elementStyles, eventCoordinates, bindEvents, unbindEvents, mousewheelDelta, FontLoader, inArray, last, round } from '../common';

import { addDuration, dateComparer } from '../date-utils';

import { SERIES_HOVER, DRAG_START, DRAG, DRAG_END, ZOOM_START, ZOOM, ZOOM_END, SELECT_START, SELECT, SELECT_END,
    PLOT_AREA_HOVER, RENDER, CATEGORY, PIE, DONUT, FUNNEL, COLUMN, MOUSEWHEEL, MOUSEWHEEL_DELAY, SHOW_TOOLTIP } from './constants';

import './animations';
import './register-charts';

var AXIS_NAMES = [ CATEGORY, VALUE, X, Y ];

var MOUSEMOVE = "mousemove";
var CONTEXTMENU = "contextmenu";
var MOUSEMOVE_DELAY = 20;

var Chart = (function (Class) {
    function Chart(element, userOptions, themeOptions, context) {
        var this$1 = this;
        if ( context === void 0 ) context = {};

        Class.call(this);

        this.observers = [];
        this.addObserver(context.observer);
        this.chartService = new ChartService(this, context);
        this.chartService.theme = themeOptions;

        this._initElement(element);

        var options = deepExtend({}, this.options, userOptions);
        this._originalOptions = deepExtend({}, options);
        this._theme = themeOptions;
        this._initTheme(options, themeOptions);

        this._initSurface();

        this._initHandlers();

        this.bindCategories();
        FontLoader.preloadFonts(userOptions, function () {
            if (!this$1._destroyed) {
                this$1._redraw();
                this$1._attachEvents();
            }
        });
    }

    if ( Class ) Chart.__proto__ = Class;
    Chart.prototype = Object.create( Class && Class.prototype );
    Chart.prototype.constructor = Chart;

    Chart.prototype._initElement = function _initElement (element) {
        this._setElementClass(element);
        element.style.position = "relative";
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        this.element = element;
    };

    Chart.prototype._setElementClass = function _setElementClass (element) {
        addClass(element, "k-chart");
    };

    Chart.prototype._initTheme = function _initTheme (options, themeOptions) {
        var seriesCopies = [];
        var series = options.series || [];

        for (var i = 0; i < series.length; i++) {
            seriesCopies.push(Object.assign({}, series[i]));
        }
        options.series = seriesCopies;

        resolveAxisAliases(options);
        this.applyDefaults(options, themeOptions);

        // Clean up default if not overriden by data attributes
        if (options.seriesColors === null) {
            delete options.seriesColors;
        }

        this.options = deepExtend({}, themeOptions, options);
        this.applySeriesColors();
    };

    Chart.prototype.getSize = function getSize () {
        return { width: this.element.offsetWidth, height: this.element.offsetHeight };
        // return kendo.dimensions(this.element);
    };

    Chart.prototype.resize = function resize (force) {
        var size = this.getSize();
        var currentSize = this._size;

        if (force || (size.width > 0 || size.height > 0) && (!currentSize || size.width !== currentSize.width || size.height !== currentSize.height)) {
            this._size = size;
            this._resize(size, force);
            this.trigger("resize", size);
        }
    };

    Chart.prototype._resize = function _resize () {
        this._noTransitionsRedraw();
    };

    Chart.prototype.redraw = function redraw (paneName) {
        this.applyDefaults(this.options);
        this.applySeriesColors();

        if (paneName) {
            var plotArea = this._model._plotArea;
            var pane = plotArea.findPane(paneName);
            plotArea.redraw(pane);
        } else {
            this._redraw();
        }
    };

    Chart.prototype.getAxis = function getAxis (name) {
        var axes = this._plotArea.axes;

        for (var idx = 0; idx < axes.length; idx++) {
            if (axes[idx].options.name === name) {
                return new ChartAxis(axes[idx]);
            }
        }
    };

    Chart.prototype.findAxisByName = function findAxisByName (name) {
        return this.getAxis(name);
    };

    Chart.prototype.plotArea = function plotArea () {
        return new ChartPlotArea(this._plotArea);
    };

    Chart.prototype.toggleHighlight = function toggleHighlight (show, filter) {
        var plotArea = this._plotArea;
        var firstSeries = (plotArea.srcSeries || plotArea.series || [])[0];
        var points;

        if (isFunction(filter)) {
            points = plotArea.filterPoints(filter);
        } else {
            var seriesName, categoryName;
            if (isObject(filter)) {
                seriesName = filter.series;
                categoryName = filter.category;
            } else {
                seriesName = categoryName = filter;
            }

            if (firstSeries.type === DONUT) {
                points = pointByCategoryName(plotArea.pointsBySeriesName(seriesName), categoryName);
            } else if (firstSeries.type === PIE || firstSeries.type === FUNNEL) {
                points = pointByCategoryName((plotArea.charts[0] || {}).points, categoryName);
            } else {
                points = plotArea.pointsBySeriesName(seriesName);
            }
        }

        if (points) {
            this.togglePointsHighlight(show, points);
        }
    };

    Chart.prototype.togglePointsHighlight = function togglePointsHighlight (show, points) {
        var highlight = this._highlight;
        for (var idx = 0; idx < points.length; idx++) {
            highlight.togglePointHighlight(points[idx], show);
        }
    };

    Chart.prototype.showTooltip = function showTooltip (filter) {
        var shared = this._sharedTooltip();
        var ref = this;
        var tooltip = ref._tooltip;
        var plotArea = ref._plotArea;
        var point, categoryIndex;

        if (isFunction(filter)) {
            point = plotArea.findPoint(filter);
            if (point && shared) {
                categoryIndex = point.categoryIx;
            }
        } else if (shared && defined(filter)) {
            categoryIndex = plotArea.categoryAxis.categoryIndex(filter);
        }

        if (shared) {
            if (categoryIndex >= 0) {
                var points = this._plotArea.pointsByCategoryIndex(categoryIndex);
                tooltip.showAt(points);
            }
        } else if (point) {
            tooltip.show(point);
        }
    };

    Chart.prototype.hideTooltip = function hideTooltip () {
        this._tooltip.hide();
    };

    Chart.prototype._initSurface = function _initSurface () {
        var surface = this.surface;
        var wrap = this._surfaceWrap();

        var chartArea = this.options.chartArea;
        if (chartArea.width) {
            elementSize(wrap, { width: chartArea.width });
        }
        if (chartArea.height) {
            elementSize(wrap, { height: chartArea.height });
        }

        if (!surface || surface.options.type !== this.options.renderAs) {
            if (surface) {
                surface.destroy();
            }

            this.surface = draw.Surface.create(wrap, {
                type: this.options.renderAs
            });

        } else {
            this.surface.clear();
            this.surface.resize();
        }
    };

    Chart.prototype._surfaceWrap = function _surfaceWrap () {
        return this.element;
    };

    Chart.prototype._redraw = function _redraw () {
        var model = this._getModel();

        this._destroyView();

        this._model = model;
        this._plotArea = model._plotArea;

        model.renderVisual();

        if (this.options.transitions !== false) {
            model.traverse(function(element) {
                if (element.animation) {
                    element.animation.setup();
                }
            });
        }

        this._initSurface();
        this.surface.draw(model.visual);

        if (this.options.transitions !== false) {
            model.traverse(function(element) {
                if (element.animation) {
                    element.animation.play();
                }
            });
        }

        this._tooltip = this._createTooltip();
        this._highlight = new Highlight();
        this._setupSelection();
        this._createPannable();
        this._createZoomSelection();
        this._createMousewheelZoom();

        this.trigger(RENDER);

        if (!this._navState) {
            this._cancelDomEvents();
        }
    };

    Chart.prototype.exportVisual = function exportVisual (options) {
        var visual;
        if (options && (options.width || options.height)) {
            var chartArea = this.options.chartArea;
            var originalChartArea = this._originalOptions.chartArea;

            deepExtend(chartArea, options);

            var model = this._getModel();

            chartArea.width = originalChartArea.width;
            chartArea.height = originalChartArea.height;

            model.renderVisual();

            visual = model.visual;
        } else {
            visual = this.surface.exportVisual();
        }

        return visual;
    };

    Chart.prototype._sharedTooltip = function _sharedTooltip () {
        return this._plotArea instanceof CategoricalPlotArea && this.options.tooltip.shared;
    };

    Chart.prototype._createPannable = function _createPannable () {
        var options = this.options;
        if (options.pannable !== false) {
            this._pannable = new Pannable(this._plotArea, options.pannable);
        }
    };

    Chart.prototype._createZoomSelection = function _createZoomSelection () {
        var zoomable = this.options.zoomable;
        var selection = (zoomable || {}).selection;
        if (zoomable !== false && selection !== false) {
            this._zoomSelection = new ZoomSelection(this, selection);
        }
    };

    Chart.prototype._toggleDomDrag = function _toggleDomDrag () {
        if (!this.domEvents || !this.domEvents.toggleDrag) {
            return;
        }

        var pannable = this.options.pannable;
        var zoomable = this.options.zoomable;
        var selection = (zoomable || {}).selection;
        if (!pannable && (zoomable === false || selection === false) && !this.requiresHandlers([ DRAG_START, DRAG, DRAG_END ])) {
            this.domEvents.toggleDrag(false);
        } else {
            this.domEvents.toggleDrag(true);
        }
    };

    Chart.prototype._createMousewheelZoom = function _createMousewheelZoom () {
        var zoomable = this.options.zoomable;
        var mousewheel = (zoomable || {}).mousewheel;
        if (zoomable !== false && mousewheel !== false) {
            this._mousewheelZoom = new MousewheelZoom(this, mousewheel);
        }
    };

    Chart.prototype._toggleDomZoom = function _toggleDomZoom () {
        if (!this.domEvents || !this.domEvents.toggleZoom) {
            return;
        }

        var zoomable = this.options.zoomable;
        var mousewheel = (zoomable || {}).mousewheel;
        if ((zoomable === false || mousewheel === false) && !this.requiresHandlers([ ZOOM_START, ZOOM, ZOOM_END ])) {
            this.domEvents.toggleZoom(false);
        } else {
            this.domEvents.toggleZoom(true);
        }
    };

    Chart.prototype._createTooltip = function _createTooltip () {
        var ref = this;
        var tooltipOptions = ref.options.tooltip;
        var tooltip;

        if (this._sharedTooltip()) {
            tooltip = this._createSharedTooltip(tooltipOptions);
        } else {
            tooltip = new Tooltip(this.chartService, tooltipOptions);
        }

        return tooltip;
    };

    Chart.prototype._createSharedTooltip = function _createSharedTooltip (options) {
        return new SharedTooltip(this._plotArea, options);
    };

    Chart.prototype.applyDefaults = function applyDefaults (options, themeOptions) {
        applyAxisDefaults(options, themeOptions);
        applySeriesDefaults(options, themeOptions);
    };

    Chart.prototype.applySeriesColors = function applySeriesColors () {
        var options = this.options;
        var series = options.series;
        var colors = options.seriesColors || [];

        for (var i = 0; i < series.length; i++) {
            var currentSeries = series[i];
            var seriesColor = colors[i % colors.length];
            var defaults = currentSeries._defaults;

            currentSeries.color = currentSeries.color || seriesColor;
            if (defaults) {
                defaults.color = defaults.color || seriesColor;
            }
        }
    };

    Chart.prototype._getModel = function _getModel () {
        var options = this.options;
        var plotArea = this._createPlotArea();
        var model = new RootElement(this._modelOptions());
        model.chart = this;
        model._plotArea = plotArea;

        Title.buildTitle(options.title, model);

        if (options.legend.visible) {
            model.append(new Legend(plotArea.options.legend, this.chartService));
        }
        model.append(plotArea);
        model.reflow();

        return model;
    };

    Chart.prototype._modelOptions = function _modelOptions () {
        var ref = this;
        var options = ref.options;
        var element = ref.element;
        var size = elementSize(element);

        this._size = null;

        return deepExtend({
            width: Math.floor(size.width) || DEFAULT_WIDTH,
            height: Math.floor(size.height) || DEFAULT_HEIGHT,
            transitions: options.transitions
        }, options.chartArea);
    };

    Chart.prototype._createPlotArea = function _createPlotArea (skipSeries) {
        var options = this.options;

        var plotArea = PlotAreaFactory.current.create(skipSeries ? [] : options.series, options, this.chartService);

        return plotArea;
    };

    Chart.prototype._hasSelection = function _hasSelection () {
        return this._selections && this._selections.length;
    };

    Chart.prototype._setupSelection = function _setupSelection () {
        var this$1 = this;

        var ref = this;
        var axes = ref._plotArea.axes;
        var selections = this._selections = [];

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i];
            var options = axis.options;
            if (axis instanceof CategoryAxis && options.select && !options.vertical) {
                var min = 0;
                var max = options.categories.length - 1;

                if (axis instanceof DateCategoryAxis) {
                    min = options.categories[min];
                    max = options.categories[max];
                }

                if (!options.justified) {
                    if (axis instanceof DateCategoryAxis) {
                        max = addDuration(max, 1, options.baseUnit, options.weekStartDay);
                    } else {
                        max++;
                    }
                }

                var selection = new Selection(this$1, axis,
                    deepExtend({ min: min, max: max }, options.select)
                );

                selections.push(selection);
            }
        }
    };

    Chart.prototype._selectStart = function _selectStart (e) {
        return this.trigger(SELECT_START, e);
    };

    Chart.prototype._select = function _select (e) {
        return this.trigger(SELECT, e);
    };

    Chart.prototype._selectEnd = function _selectEnd (e) {
        return this.trigger(SELECT_END, e);
    };

    Chart.prototype._initHandlers = function _initHandlers () {
        this._clickHandler = this._click.bind(this);
        this._mousewheelHandler = this._mousewheel.bind(this);
        this._surfaceMouseenterHandler = this._mouseover.bind(this);
        this._surfaceMouseleaveHandler = this._mouseout.bind(this);

        this._mousemove = throttle(
            this._mousemove.bind(this),
            MOUSEMOVE_DELAY
        );
    };

    Chart.prototype.addObserver = function addObserver (observer) {
        if (observer) {
            this.observers.push(observer);
        }
    };

    Chart.prototype.removeObserver = function removeObserver (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };

    Chart.prototype.requiresHandlers = function requiresHandlers (eventNames) {
        var observers = this.observers;
        for (var idx = 0; idx < observers.length; idx++) {
            if (observers[idx].requiresHandlers(eventNames)) {
                return true;
            }
        }
    };

    Chart.prototype.trigger = function trigger (name, args) {
        if ( args === void 0 ) args = {};

        if (name === SHOW_TOOLTIP) {
            args.anchor.point = this._toDocumentCoordinates(args.anchor.point);
        }
        args.sender = this;

        var observers = this.observers;
        var isDefaultPrevented = false;
        for (var idx = 0; idx < observers.length; idx++) {
            if (observers[idx].trigger(name, args)) {
                isDefaultPrevented = true;
            }
        }

        return isDefaultPrevented;
    };

    Chart.prototype._attachEvents = function _attachEvents () {
        var ref = this;
        var element = ref.element;
        var surface = ref.surface;

        surface.bind("mouseenter", this._surfaceMouseenterHandler);
        surface.bind("mouseleave", this._surfaceMouseleaveHandler);
        var obj;
        bindEvents(element, ( obj = {}, obj[ CONTEXTMENU ] = this._clickHandler, obj[ MOUSEWHEEL ] = this._mousewheelHandler, obj ));

        if (this._shouldAttachMouseMove()) {
            var obj$1;
            bindEvents(element, ( obj$1 = {}, obj$1[ MOUSEMOVE ] = this._mousemove, obj$1 ));
        }

        this.domEvents = DomEventsBuilder.create(this.element, {
            start: this._start.bind(this),
            move: this._move.bind(this),
            end: this._end.bind(this),
            tap: this._tap.bind(this),
            gesturestart: this._gesturestart.bind(this),
            gesturechange: this._gesturechange.bind(this),
            gestureend: this._gestureend.bind(this)
        });

        this._toggleDomDrag();
        this._toggleDomZoom();
    };

    Chart.prototype._cancelDomEvents = function _cancelDomEvents () {
        if (this.domEvents && this.domEvents.cancel) {
            this.domEvents.cancel();
        }
    };

    Chart.prototype._gesturestart = function _gesturestart (e) {
        if (this._mousewheelZoom && !this._stopDragEvent(e)) {
            this._gestureDistance = e.distance;
            this._unsetActivePoint();
            this.surface.suspendTracking();
        }
    };

    Chart.prototype._gestureend = function _gestureend (e) {
        if (this._zooming && !this._stopDragEvent(e)) {
            if (this.surface) {
                this.surface.resumeTracking();
            }
            this._zooming = false;
            this.trigger(ZOOM_END, {});
        }
    };

    Chart.prototype._gesturechange = function _gesturechange (e) {
        var mousewheelZoom = this._mousewheelZoom;

        if (mousewheelZoom && !this._stopDragEvent(e)) {
            e.preventDefault();
            var previousGestureDistance = this._gestureDistance;
            var scaleDelta = -e.distance / previousGestureDistance + 1;

            if (Math.abs(scaleDelta) >= 0.1) {
                scaleDelta = Math.round(scaleDelta * 10);

                this._gestureDistance = e.distance;
                var args = { delta: scaleDelta, axisRanges: axisRanges(this._plotArea.axes), originalEvent: e };
                if (this._zooming || !this.trigger(ZOOM_START, args)) {

                    if (!this._zooming) {
                        this._zooming = true;
                    }

                    var ranges = args.axisRanges = mousewheelZoom.updateRanges(scaleDelta);
                    if (ranges && !this.trigger(ZOOM, args)) {
                        mousewheelZoom.zoom();
                    }
                }
            }
        }
    };

    Chart.prototype._mouseout = function _mouseout (e) {
        if (e.element) {
            var element = this._drawingChartElement(e.element, e);

            if (element && element.leave) {
                element.leave(this, e.originalEvent);
            }
        }
    };

    Chart.prototype._start = function _start (e) {
        var coords = this._eventCoordinates(e);

        if (this._stopDragEvent(e) || !this._plotArea.backgroundContainsPoint(coords)) {
            return;
        }


        if (this.requiresHandlers([ DRAG_START, DRAG, DRAG_END ])) {
            this._startNavigation(e, coords, DRAG_START);
        }

        if (this._pannable && this._pannable.start(e)) {
            this.surface.suspendTracking();
            this._unsetActivePoint();
            this._suppressHover = true;
        }

        if (this._zoomSelection) {
            if (this._zoomSelection.start(e)) {
                this.trigger(ZOOM_START, { axisRanges: axisRanges(this._plotArea.axes), originalEvent: e });
            }
        }
    };

    Chart.prototype._move = function _move (e) {
        var ref = this;
        var state = ref._navState;
        var pannable = ref._pannable;

        if (this._stopDragEvent(e)) {
            return;
        }

        if (pannable) {
            var ranges = pannable.move(e);

            if (ranges && !this.trigger(DRAG, { axisRanges: ranges, originalEvent: e })) {
                pannable.pan();
            }
        } else if (state) {
            var ranges$1 = {};
            var axes = state.axes;

            for (var i = 0; i < axes.length; i++) {
                var currentAxis = axes[i];
                var axisName = currentAxis.options.name;
                if (axisName) {
                    var axis = currentAxis.options.vertical ? e.y : e.x;
                    var delta = axis.startLocation - axis.location;

                    if (delta !== 0) {
                        ranges$1[currentAxis.options.name] = currentAxis.translateRange(delta);
                    }
                }
            }

            state.axisRanges = ranges$1;
            this.trigger(DRAG, {
                axisRanges: ranges$1,
                originalEvent: e
            });
        }

        if (this._zoomSelection) {
            this._zoomSelection.move(e);
        }
    };

    Chart.prototype._end = function _end (e) {
        if (this._stopDragEvent(e)) {
            return;
        }

        var pannable = this._pannable;
        if (pannable && pannable.end(e)) {
            this.surface.resumeTracking();
            this.trigger(DRAG_END, {
                axisRanges: axisRanges(this._plotArea.axes),
                originalEvent: e
            });
            this._suppressHover = false;
        } else {
            this._endNavigation(e, DRAG_END);
        }

        if (this._zoomSelection) {
            var ranges = this._zoomSelection.end(e);
            if (ranges && !this.trigger(ZOOM, { axisRanges: ranges, originalEvent: e })) {
                this._zoomSelection.zoom();
                this.trigger(ZOOM_END, { axisRanges: ranges, originalEvent: e });
            }
        }
    };

    Chart.prototype._stopDragEvent = function _stopDragEvent () {
        return this._hasSelection();
    };

    Chart.prototype._mousewheel = function _mousewheel (e) {
        var this$1 = this;

        var delta = mousewheelDelta(e);
        var mousewheelZoom = this._mousewheelZoom;
        var coords = this._eventCoordinates(e);

        if (!this._plotArea.backgroundContainsPoint(coords)) {
            return;
        }

        if (mousewheelZoom) {
            var args = { delta: delta, axisRanges: axisRanges(this._plotArea.axes), originalEvent: e };
            if (this._zooming || !this.trigger(ZOOM_START, args)) {
                e.preventDefault();

                if (!this._zooming) {
                    this._unsetActivePoint();
                    this.surface.suspendTracking();
                    this._zooming = true;
                }

                if (this._mwTimeout) {
                    clearTimeout(this._mwTimeout);
                }

                args.axisRanges = mousewheelZoom.updateRanges(delta);
                if (args.axisRanges && !this.trigger(ZOOM, args)) {
                    mousewheelZoom.zoom();
                }

                this._mwTimeout = setTimeout(function () {
                    this$1.trigger(ZOOM_END, args);
                    this$1._zooming = false;
                    if (this$1.surface) {
                        this$1.surface.resumeTracking();
                    }
                }, MOUSEWHEEL_DELAY);
            }
        } else {
            var state = this._navState;
            if (!state) {
                var prevented = this._startNavigation(e, coords, ZOOM_START);
                if (!prevented) {
                    state = this._navState;
                }
            }

            if (state) {
                var totalDelta = state.totalDelta || delta;
                state.totalDelta = totalDelta + delta;

                var axes = this._navState.axes;
                var ranges = {};

                for (var i = 0; i < axes.length; i++) {
                    var currentAxis = axes[i];
                    var axisName = currentAxis.options.name;
                    if (axisName) {
                        ranges[axisName] = currentAxis.scaleRange(-totalDelta);
                    }
                }

                this.trigger(ZOOM, {
                    delta: delta,
                    axisRanges: ranges,
                    originalEvent: e
                });

                if (this._mwTimeout) {
                    clearTimeout(this._mwTimeout);
                }

                this._mwTimeout = setTimeout(function () {
                    this$1._endNavigation(e, ZOOM_END);
                }, MOUSEWHEEL_DELAY);
            }
        }
    };

    Chart.prototype._startNavigation = function _startNavigation (e, coords, chartEvent) {
        var plotArea = this._model._plotArea;
        var pane = plotArea.findPointPane(coords);
        var axes = plotArea.axes.slice(0);

        if (!pane) {
            return;
        }

        var ranges = axisRanges(axes);

        var prevented = this.trigger(chartEvent, {
            axisRanges: ranges,
            originalEvent: e
        });

        if (prevented) {
            this._cancelDomEvents();
        } else {
            this._suppressHover = true;
            this._unsetActivePoint();
            this._navState = {
                axisRanges: ranges,
                pane: pane,
                axes: axes
            };
        }
    };

    Chart.prototype._endNavigation = function _endNavigation (e, chartEvent) {
        if (this._navState) {
            this.trigger(chartEvent, {
                axisRanges: this._navState.axisRanges,
                originalEvent: e
            });
            this._suppressHover = false;
            this._navState = null;
        }
    };

    Chart.prototype._getChartElement = function _getChartElement (e, match) {
        var element = this.surface.eventTarget(e);
        if (element) {
            return this._drawingChartElement(element, e, match);
        }
    };

    Chart.prototype._drawingChartElement = function _drawingChartElement (element, e, match) {
        var current = element;
        var chartElement;
        while (current && !chartElement) {
            chartElement = current.chartElement;
            current = current.parent;
        }

        if (chartElement) {
            if (chartElement.aliasFor) {
                chartElement = chartElement.aliasFor(e, this._eventCoordinates(e));
            }

            if (match) {
                chartElement = chartElement.closest(match);
            }

            return chartElement;
        }
    };

    Chart.prototype._eventCoordinates = function _eventCoordinates (e) {
        var coordinates = eventCoordinates(e);
        return this._toModelCoordinates(coordinates.x, coordinates.y);
    };

    Chart.prototype._elementPadding = function _elementPadding () {
        if (!this._padding) {
            var ref = elementStyles(this.element, [ "paddingLeft", "paddingTop" ]);
            var paddingLeft = ref.paddingLeft;
            var paddingTop = ref.paddingTop;
            this._padding = {
                top: paddingTop,
                left: paddingLeft
            };
        }

        return this._padding;
    };

    Chart.prototype._toDocumentCoordinates = function _toDocumentCoordinates (point) {
        var padding = this._elementPadding();
        var offset = elementOffset(this.element);

        return {
            left: round(point.x + padding.left + offset.left),
            top: round(point.y + padding.top + offset.top)
        };
    };

    Chart.prototype._toModelCoordinates = function _toModelCoordinates (clientX, clientY) {
        var element = this.element;
        var offset = elementOffset(element);
        var padding = this._elementPadding();

        return new Point(
            clientX - offset.left - padding.left,
            clientY - offset.top - padding.top
        );
    };

    Chart.prototype._tap = function _tap (e) {
        var this$1 = this;

        var drawingElement = this.surface.eventTarget(e);
        var element = this._drawingChartElement(drawingElement, e);

        if (this._activePoint === element) {
            this._propagateClick(element, e);
        } else {
            if (!this._startHover(drawingElement, e)) {
                this._unsetActivePoint();
            }

            this._propagateClick(element, e);
        }

        //part of fix for hover issue on windows touch
        this.handlingTap = true;
        setTimeout(function () {
            this$1.handlingTap = false;
        }, 0);
    };

    Chart.prototype._click = function _click (e) {
        var element = this._getChartElement(e);
        this._propagateClick(element, e);
    };

    Chart.prototype._propagateClick = function _propagateClick (element, e) {
        var this$1 = this;

        var current = element;
        while (current) {
            if (current.click) {
                current.click(this$1, e);
            }

            current = current.parent;
        }
    };

    Chart.prototype._startHover = function _startHover (element, e) {
        var chartElement = this._drawingChartElement(element, e);
        var ref = this;
        var tooltip = ref._tooltip;
        var highlight = ref._highlight;

        if (this._suppressHover || !highlight || highlight.isHighlighted(chartElement) || this._sharedTooltip()) {
            return false;
        }

        var point = this._drawingChartElement(element, e, function(element) {
            return element.hover && !(element instanceof PlotAreaBase);
        });

        if (point && !point.hover(this, e)) {
            this._activePoint = point;

            var tooltipOptions = deepExtend({}, tooltipOptions, point.options.tooltip);
            if (tooltipOptions.visible) {
                tooltip.show(point);
            }

            highlight.show(point);

            return point;
        }
    };

    Chart.prototype._mouseover = function _mouseover (e) {
        var point = this._startHover(e.element, e.originalEvent);

        if (point && point.tooltipTracking) {
            this._mouseMoveTrackHandler = this._mouseMoveTrackHandler || this._mouseMoveTracking.bind(this);
            var obj;
            bindEvents(document, ( obj = {}, obj[ MOUSEMOVE ] = this._mouseMoveTrackHandler, obj ));
        }
    };

    Chart.prototype._mouseMoveTracking = function _mouseMoveTracking (e) {
        var ref = this;
        var options = ref.options;
        var tooltip = ref._tooltip;
        var highlight = ref._highlight;
        var point = ref._activePoint;
        var coords = this._eventCoordinates(e);

        if (this._plotArea.box.containsPoint(coords)) {
            if (point && point.tooltipTracking && point.series && point.parent.getNearestPoint) {
                var seriesPoint = point.parent.getNearestPoint(coords.x, coords.y, point.seriesIx);
                if (seriesPoint && seriesPoint !== point) {
                    seriesPoint.hover(this, e);
                    this._activePoint = seriesPoint;

                    var tooltipOptions = deepExtend({}, options.tooltip, point.options.tooltip);
                    if (tooltipOptions.visible) {
                        tooltip.show(seriesPoint);
                    }

                    highlight.show(seriesPoint);
                }
            }
        } else {
            var obj;
            unbindEvents(document, ( obj = {}, obj[ MOUSEMOVE ] = this._mouseMoveTrackHandler, obj ));
            this._unsetActivePoint();
        }
    };

    Chart.prototype._mousemove = function _mousemove (e) {
        var coords = this._eventCoordinates(e);

        this._trackCrosshairs(coords);

        if (this._plotArea.hover) {
            this._plotArea.hover(this, e);
        }

        if (this._sharedTooltip()) {
            this._trackSharedTooltip(coords, e);
        }
    };

    Chart.prototype._trackCrosshairs = function _trackCrosshairs (coords) {
        var crosshairs = this._plotArea.crosshairs;

        for (var i = 0; i < crosshairs.length; i++) {
            var current = crosshairs[i];

            if (current.box.containsPoint(coords)) {
                current.showAt(coords);
            } else {
                current.hide();
            }
        }
    };

    Chart.prototype._trackSharedTooltip = function _trackSharedTooltip (coords, e) {
        var ref = this;
        var tooltipOptions = ref.options.tooltip;
        var plotArea = ref._plotArea;
        var categoryAxis = ref._plotArea.categoryAxis;
        var tooltip = ref._tooltip;
        var highlight = ref._highlight;

        if (plotArea.box.containsPoint(coords)) {
            var index = categoryAxis.pointCategoryIndex(coords);
            if (index !== this._tooltipCategoryIx) {
                var points = plotArea.pointsByCategoryIndex(index);

                var pointArgs = points.map(function(point) {
                    return point.eventArgs(e);
                });

                var hoverArgs = pointArgs[0] || {};
                hoverArgs.categoryPoints = pointArgs;

                if (points.length > 0 && !this.trigger(SERIES_HOVER, hoverArgs)) {
                    if (tooltipOptions.visible) {
                        tooltip.showAt(points, coords);
                    }

                    highlight.show(points);
                } else {
                    tooltip.hide();
                }

                this._tooltipCategoryIx = index;
            }
        }
    };

    Chart.prototype.hideElements = function hideElements () {
        var ref = this;
        var plotArea = ref._plotArea;
        var tooltip = ref._tooltip;
        var highlight = ref._highlight;
        this._mousemove.cancel();

        plotArea.hideCrosshairs();

        highlight.hide();

        tooltip.hide();

        delete this._tooltipCategoryIx;
    };

    Chart.prototype._unsetActivePoint = function _unsetActivePoint () {
        var ref = this;
        var tooltip = ref._tooltip;
        var highlight = ref._highlight;

        this._activePoint = null;

        if (tooltip) {
            tooltip.hide();
        }

        if (highlight) {
            highlight.hide();
        }
    };

    Chart.prototype._deferRedraw = function _deferRedraw () {
        this._redraw();
    };

    Chart.prototype._clearRedrawTimeout = function _clearRedrawTimeout () {
        if (this._redrawTimeout) {
            clearInterval(this._redrawTimeout);
            this._redrawTimeout = null;
        }
    };

    Chart.prototype.bindCategories = function bindCategories () {
        var this$1 = this;

        var options = this.options;
        var definitions = [].concat(options.categoryAxis);

        for (var axisIx = 0; axisIx < definitions.length; axisIx++) {
            var axis = definitions[axisIx];
            if (axis.autoBind !== false) {
                this$1.bindCategoryAxisFromSeries(axis, axisIx);
            }
        }
    };

    Chart.prototype.bindCategoryAxisFromSeries = function bindCategoryAxisFromSeries (axis, axisIx) {
        var this$1 = this;

        var series = this.options.series;
        var seriesLength = series.length;
        var uniqueCategories = {};
        var items = [];
        var dateAxis;

        for (var seriesIx = 0; seriesIx < seriesLength; seriesIx++) {
            var s = series[seriesIx];
            var onAxis = s.categoryAxis === axis.name || (!s.categoryAxis && axisIx === 0);
            var data = s.data;
            var dataLength = data.length;

            if (s.categoryField && onAxis && dataLength > 0) {
                dateAxis = isDateAxis(axis, getField(s.categoryField, data[0]));

                var getFn = dateAxis ? getDateField : getField;

                for (var dataIx = 0; dataIx < dataLength; dataIx++) {
                    var dataRow = data[dataIx];
                    var category = getFn(s.categoryField, dataRow, this$1.chartService.intl);

                    if (dateAxis || !uniqueCategories[category]) {
                        items.push([ category, dataRow ]);

                        if (!dateAxis) {
                            uniqueCategories[category] = true;
                        }
                    }
                }
            }
        }

        if (items.length > 0) {
            if (dateAxis) {
                items = uniqueDates(items, function(a, b) {
                    return dateComparer(a[0], b[0]);
                });
            }

            var result = transpose(items);
            axis.categories = result[0];
        }
    };

    Chart.prototype._isBindable = function _isBindable (series) {
        var valueFields = SeriesBinder.current.valueFields(series);
        var result = true;

        for (var i = 0; i < valueFields.length; i++) {
            var field = valueFields[i];
            if (field === VALUE) {
                field = "field";
            } else {
                field = field + "Field";
            }

            if (!defined(series[field])) {
                result = false;
                break;
            }
        }

        return result;
    };

    Chart.prototype._noTransitionsRedraw = function _noTransitionsRedraw () {
        var options = this.options;
        var transitionsState;

        if (options.transitions) {
            options.transitions = false;
            transitionsState = true;
        }

        this._redraw();

        if (transitionsState) {
            options.transitions = true;
        }
    };

    Chart.prototype._legendItemHover = function _legendItemHover (seriesIndex, pointIndex) {
        var ref = this;
        var plotArea = ref._plotArea;
        var highlight = ref._highlight;
        var currentSeries = (plotArea.srcSeries || plotArea.series)[seriesIndex];
        var items;

        if (inArray(currentSeries.type, [ PIE, DONUT, FUNNEL ])) {
            items = plotArea.findPoint(function(point) {
                return point.series.index === seriesIndex && point.index === pointIndex;
            });
        } else {
            items = plotArea.pointsBySeriesIndex(seriesIndex);
        }

        highlight.show(items);
    };

    Chart.prototype._shouldAttachMouseMove = function _shouldAttachMouseMove () {
        return this._plotArea.crosshairs.length || (this._tooltip && this._sharedTooltip()) || this.requiresHandlers([ PLOT_AREA_HOVER ]);
    };

    Chart.prototype.updateMouseMoveHandler = function updateMouseMoveHandler () {
        var obj;
        unbindEvents(this.element, ( obj = {}, obj[ MOUSEMOVE ] = this._mousemove, obj ));

        if (this._shouldAttachMouseMove()) {
            var obj$1;
            bindEvents(this.element, ( obj$1 = {}, obj$1[ MOUSEMOVE ] = this._mousemove, obj$1 ));
        }
    };

    Chart.prototype.applyOptions = function applyOptions (options, theme) {
        clearMissingValues(this._originalOptions, options);
        this._originalOptions = deepExtend(this._originalOptions, options);
        this.options = deepExtend({}, this._originalOptions);

        if (theme) {
            this._theme = theme;
            this.chartService.theme = theme;
        }
        this._initTheme(this.options, this._theme);
    };

    Chart.prototype.setOptions = function setOptions (options, theme) {
        this.applyOptions(options, theme);
        this.bindCategories();
        this.redraw();
        this.updateMouseMoveHandler();

        this._toggleDomDrag();
        this._toggleDomZoom();
    };

    Chart.prototype.destroy = function destroy () {
        this._destroyed = true;

        var obj;
        unbindEvents(this.element, ( obj = {}, obj[ CONTEXTMENU ] = this._clickHandler, obj[ MOUSEWHEEL ] = this._mousewheelHandler, obj[ MOUSEMOVE ] = this._mousemove, obj ));

        if (this.domEvents) {
            this.domEvents.destroy();
            delete this.domEvents;
        }

        var obj$1;
        unbindEvents(document, ( obj$1 = {}, obj$1[ MOUSEMOVE ] = this._mouseMoveTrackHandler, obj$1 ));

        this._destroyView();

        if (this.surface) {
            this.surface.destroy();
            this.surface = null;
        }

        this._clearRedrawTimeout();
    };

    Chart.prototype._destroyView = function _destroyView () {
        var ref = this;
        var model = ref._model;
        var selections = ref._selections;

        if (model) {
            model.destroy();
            this._model = null;
        }

        if (selections) {
            while (selections.length > 0) {
                selections.shift().destroy();
            }
        }

        this._unsetActivePoint();

        if (this._tooltip) {
            this._tooltip.destroy();
        }

        if (this._highlight) {
            this._highlight.destroy();
        }

        if (this._zoomSelection) {
            this._zoomSelection.destroy();
            delete this._zoomSelection;
        }

        if (this._pannable) {
            this._pannable.destroy();
            delete this._pannable;
        }

        if (this._mousewheelZoom) {
            this._mousewheelZoom.destroy();
            delete this._mousewheelZoom;
        }
    };

    return Chart;
}(Class));

function resolveAxisAliases(options) {
    var aliases = AXIS_NAMES;

    for (var idx = 0; idx < aliases.length; idx++) {
        var alias = aliases[idx] + "Axes";
        if (options[alias]) {
            options[aliases[idx] + "Axis"] = options[alias];
            delete options[alias];
        }
    }
}

function pointByCategoryName(points, name) {
    if (points) {
        for (var idx = 0; idx < points.length; idx++) {
            if (points[idx].category === name) {
                return [ points[idx] ];
            }
        }
    }
}

function applyAxisDefaults(options, themeOptions) {
    var themeAxisDefaults = ((themeOptions || {}).axisDefaults) || {};
    var axisName, axisDefaults, axes;

    function mapAxisOptions(axisOptions) {
        var axisColor = (axisOptions || {}).color || axisDefaults.color;
        var result = deepExtend({},
            themeAxisDefaults,
            themeAxisDefaults[axisName],
            axisDefaults,
            axisDefaults[axisName], {
                line: { color: axisColor },
                labels: { color: axisColor },
                title: { color: axisColor }
            },
            axisOptions
        );

        delete result[axisName];

        return result;
    }

    for (var idx = 0; idx < AXIS_NAMES.length; idx++) {
        axisName = AXIS_NAMES[idx] + "Axis";
        axisDefaults = options.axisDefaults || {};
        axes = [].concat(options[axisName]);

        axes = axes.map(mapAxisOptions);

        options[axisName] = axes.length > 1 ? axes : axes[0];
    }
}

function applySeriesDefaults(options, themeOptions) {
    var series = options.series;
    var seriesLength = series.length;
    var seriesDefaults = options.seriesDefaults;
    var commonDefaults = deepExtend({}, options.seriesDefaults);
    var themeSeriesDefaults = themeOptions ? deepExtend({}, themeOptions.seriesDefaults) : {};
    var commonThemeDefaults = deepExtend({}, themeSeriesDefaults);

    cleanupNestedSeriesDefaults(commonDefaults);
    cleanupNestedSeriesDefaults(commonThemeDefaults);

    for (var i = 0; i < seriesLength; i++) {
        var seriesType = series[i].type || options.seriesDefaults.type;

        var baseOptions = deepExtend(
            { data: [] },
            commonThemeDefaults,
            themeSeriesDefaults[seriesType],
            { tooltip: options.tooltip },
            commonDefaults,
            seriesDefaults[seriesType]
        );

        series[i]._defaults = baseOptions;
        series[i] = deepExtend({}, baseOptions, series[i]);
    }
}

function cleanupNestedSeriesDefaults(seriesDefaults) {
    delete seriesDefaults.bar;
    delete seriesDefaults.column;
    delete seriesDefaults.rangeColumn;
    delete seriesDefaults.line;
    delete seriesDefaults.verticalLine;
    delete seriesDefaults.pie;
    delete seriesDefaults.donut;
    delete seriesDefaults.area;
    delete seriesDefaults.verticalArea;
    delete seriesDefaults.scatter;
    delete seriesDefaults.scatterLine;
    delete seriesDefaults.bubble;
    delete seriesDefaults.candlestick;
    delete seriesDefaults.ohlc;
    delete seriesDefaults.boxPlot;
    delete seriesDefaults.bullet;
    delete seriesDefaults.verticalBullet;
    delete seriesDefaults.polarArea;
    delete seriesDefaults.polarLine;
    delete seriesDefaults.radarArea;
    delete seriesDefaults.radarLine;
    delete seriesDefaults.waterfall;
}


function axisRanges(axes) {
    var ranges = {};

    for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        var axisName = axis.options.name;
        if (axisName) {
            ranges[axisName] = axis.range();
        }
    }

    return ranges;
}

function sortDates(dates, comparer) {
    if ( comparer === void 0 ) comparer = dateComparer;

    for (var i = 1, length = dates.length; i < length; i++) {
        if (comparer(dates[i], dates[i - 1]) < 0) {
            dates.sort(comparer);
            break;
        }
    }

    return dates;
}

function uniqueDates(srcDates, comparer) {
    if ( comparer === void 0 ) comparer = dateComparer;

    var dates = sortDates(srcDates, comparer);
    var length = dates.length;
    var result = length > 0 ? [ dates[0] ] : [];

    for (var i = 1; i < length; i++) {
        if (comparer(dates[i], last(result)) !== 0) {
            result.push(dates[i]);
        }
    }

    return result;
}

function transpose(rows) {
    var rowCount = rows.length;
    var result = [];

    for (var rowIx = 0; rowIx < rowCount; rowIx++) {
        var row = rows[rowIx];
        var colCount = row.length;

        for (var colIx = 0; colIx < colCount; colIx++) {
            result[colIx] = result[colIx] || [];
            result[colIx].push(row[colIx]);
        }
    }

    return result;
}

function clearMissingValues(originalOptions, options) {
    for (var field in options) {
        var fieldValue = options[field];
        var originalValue = originalOptions[field];
        if (defined(originalValue)) {
            var nullValue = fieldValue === null;
            if ((nullValue || !defined(fieldValue))) {
                delete originalOptions[field];
                if (nullValue) {
                    delete options[field];
                }
            } else if (originalValue && isObject(fieldValue)) {
                if (isObject(originalValue)) {
                    clearMissingValues(originalValue, fieldValue);
                }
            }
        }
    }
}

setDefaultOptions(Chart, {
    renderAs: "",
    chartArea: {},
    legend: {
        visible: true,
        labels: {}
    },
    categoryAxis: {},
    seriesDefaults: {
        type: COLUMN,
        data: [],
        highlight: {
            visible: true
        },
        labels: {},
        negativeValues: {
            visible: false
        }
    },
    series: [],
    seriesColors: null,
    tooltip: {
        visible: false
    },
    transitions: true,
    valueAxis: {},
    plotArea: {},
    title: {},
    xAxis: {},
    yAxis: {},
    panes: [ {} ],
    pannable: false,
    zoomable: false
});

export default Chart;

//# sourceMappingURL=chart.js.map
