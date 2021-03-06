'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var calculateFixedTrackSize = function (ref) {
        var max = ref.max;
        var min = ref.min;
        var smallStep = ref.smallStep;
        var fixedTickWidth = ref.fixedTickWidth;

        return ((max - min) / smallStep) * fixedTickWidth;
};

var calculateTrackSize = function (wrapperWidth, offset, showButtons) {
    if ( showButtons === void 0 ) showButtons = true;

    var BUTTONS_COUNT = 2;
    var trackOffset = showButtons ? parseFloat(offset, 10) * BUTTONS_COUNT : 0;
    var trackWidth = wrapperWidth - trackOffset - BUTTONS_COUNT;

    return trackWidth;
};

var calculateTicksCount = function (max, min, smallStep) {
        if ( max === void 0 ) max = 0;
        if ( min === void 0 ) min = 0;
        if ( smallStep === void 0 ) smallStep = 1;

        return calculateAreasCount(max, min, smallStep) + 1;
};

var calculateAreasCount = function (max, min, smallStep) {
    if ( max === void 0 ) max = 0;
    if ( min === void 0 ) min = 0;
    if ( smallStep === void 0 ) smallStep = 1;

    if (smallStep <= 0 ) {
        throw new Error("Invalid argument: smallStep must be a positive number");
    }

    return Math.floor(Math.abs(min - max) / smallStep);
};

var calculateValueFromTick = function (index, ref) {
    var max = ref.max;
    var min = ref.min;
    var smallStep = ref.smallStep;
    var reverse = ref.reverse;
    var vertical = ref.vertical;

    var value = min + (index * smallStep);

    return vertical || reverse ? Math.abs(value - max) : value;
};

var calculateValueFromTrack = function (clientRect, pageOffset, props) {
    var length, wrapperOffset;

    if (props.vertical) {
        var top = clientRect.top;
        var bottom = clientRect.bottom;
        length = top - bottom;
        wrapperOffset = pageOffset.pageY - bottom;
    } else {
        var left = clientRect.left;
        var right = clientRect.right;
        length = right - left;
        wrapperOffset = pageOffset.pageX - left;
    }

    return valueFromTrack(props, wrapperOffset, length);
};

var valueFromTrack = function (props, wrapperOffset, length) {
    var max = props.max;
    var min = props.min;
    var reverse = props.reverse;
    var smallStep = props.smallStep;
    var distance = max - min;
    var clickOffset = wrapperOffset / length;
    var maxTickValue = distance - (distance % smallStep);
    var maxOffset = (100 / distance) * maxTickValue / 100;
    var absValue = (wrapperOffset / length) * distance;
    var value = max;

    if (clickOffset < maxOffset) {
        value = reverse ? max - absValue : absValue + min;
    }

    return snapValue(extendProps(props, { value: value }));
};

var calculateTickSizes = function (trackSize, min, max, step) {
    var elementCount = Math.floor((max - min) / step) + 1;
    var distStep = trackSize / (max - min);
    var result = [];
    var usedSpace = 0;
    var endPoint = 0;

    for (var i = 0; i < elementCount; i++) {
        if (i === 0 || i === elementCount - 1) {
            endPoint += (step / 2) * distStep;
        } else {
            endPoint += step * distStep;
        }

        var size = Math.round(endPoint - usedSpace);

        result.push(size);

        usedSpace += size;
    }

    return result;
};

var calculateHandlePosition = function (ref) {
    var handleWidth = ref.handleWidth;
    var trackWidth = ref.trackWidth;
    var min = ref.min;
    var max = ref.max;
    var reverse = ref.reverse;
    var value = ref.value;

    var halfHandleWidth = Math.floor(handleWidth / 2);
    var step = trackWidth / Math.abs(max - min);
    var pos = step * (value - min);
    if (reverse) {
        pos = trackWidth - pos;
    }

    return Math.floor(pos - halfHandleWidth);
};

var decreaseValueToStep = function (ref) {
    var max = ref.max;
    var min = ref.min;
    var smallStep = ref.smallStep;
    var value = ref.value;

    var result;
    if (value % smallStep === 0) {
        result = value - smallStep;
    } else {
        result = value - (value % smallStep);
    }
    return trimValue(max, min, result);
};

var increaseValueToStep = function (ref) {
    var max = ref.max;
    var min = ref.min;
    var smallStep = ref.smallStep;
    var value = ref.value;

    var result = value - (value % smallStep) + smallStep;

    return trimValue(max, min, result);
};

var snapValue = function (props) {
    var smallStep = props.smallStep;
    var value = props.value;
    var left = decreaseValueToStep(props);
    var right = increaseValueToStep(props);

    if (value % smallStep === 0) {
        return value;
    }

    if (right - value <= smallStep / 2) {
        return right;
    }

    return left;
};

var trimValue = function (max, min, value) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
};

var identity = function (value) { return value; };

var extendProps = function (target) {
    var sources = [], len = arguments.length - 1;
    while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

    return Object.assign.apply(Object, [ {}, target ].concat( sources ));
};

var SliderUtil = {
    calculateFixedTrackSize: calculateFixedTrackSize,
    calculateValueFromTick: calculateValueFromTick,
    calculateValueFromTrack: calculateValueFromTrack,
    calculateTrackSize: calculateTrackSize,
    calculateTicksCount: calculateTicksCount,
    calculateTickSizes: calculateTickSizes,
    calculateHandlePosition: calculateHandlePosition,
    decreaseValueToStep: decreaseValueToStep,
    identity: identity,
    increaseValueToStep: increaseValueToStep,
    trimValue: trimValue,
    snapValue: snapValue,
    valueFromTrack: valueFromTrack
};

var SliderModel = function SliderModel(props, wrapper, track) {
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.tickSizes = this.getTickSizes();
};

SliderModel.prototype.getTickSizes = function getTickSizes () {
    var ref = this.props;
        var max = ref.max;
        var min = ref.min;
        var smallStep = ref.smallStep;
    var trackWidth = this.trackWidth();

    return SliderUtil.calculateTickSizes(trackWidth, min, max, smallStep);
};

SliderModel.prototype.trackWidth = function trackWidth () {
    if (this.props.fixedTickWidth) {
        return SliderUtil.calculateFixedTrackSize(this.props);
    }

    return SliderUtil.calculateTrackSize(
        this.elementSize(this.wrapper),
        this.elementOffset(this.track),
        this.props.buttons
    );
};

SliderModel.prototype.resizeTrack = function resizeTrack () {
    var orientation = this.props.vertical ? 'height' : 'width';
    var trackWidth = this.trackWidth();

    this.track.style[orientation] = trackWidth + "px";
};

SliderModel.prototype.resizeTicks = function resizeTicks (ticksContainer, ticks) {
        var this$1 = this;

    var dimension = this.props.vertical ? "height" : "width";

    Array.prototype.slice.call(ticks).map(function (tick, index) { return tick.style[dimension] = (this$1.tickSizes[index]) + "px"; });

    if (this.props.vertical) {
        this.adjustPadding(ticksContainer);
    }
};

SliderModel.prototype.resizeWrapper = function resizeWrapper () {
    var dimension = this.props.vertical ? "height" : "width";
    var wrapperSize = this.elementSize(this.wrapper);
    var trackWidth = SliderUtil.calculateTrackSize(wrapperSize, this.elementOffset(this.track));
    var fixedTrackWidth = SliderUtil.calculateFixedTrackSize(this.props);

    if (trackWidth > fixedTrackWidth) {
        this.wrapper.parentElement.style[dimension] = (wrapperSize - (trackWidth - fixedTrackWidth)) + "px";
    } else {
        this.wrapper.parentElement.style[dimension] = (wrapperSize + (fixedTrackWidth - trackWidth)) + "px";
    }
};

SliderModel.prototype.positionHandle = function positionHandle (dragHandle) {
    var ref = this.props;
        var max = ref.max;
        var min = ref.min;
        var reverse = ref.reverse;
        var vertical = ref.vertical;
    var position = vertical ? 'bottom' : 'left';
    var trackWidth = this.trackWidth();
    var value = SliderUtil.trimValue(max, min, this.props.value);

    this.handlePosition = SliderUtil.calculateHandlePosition({
        min: min,
        max: max,
        reverse: reverse,
        value: value,
        trackWidth: trackWidth,
        handleWidth: dragHandle.offsetWidth
    });

    dragHandle.style[position] = (this.handlePosition) + "px";
};

SliderModel.prototype.positionSelection = function positionSelection (dragHandle, selection) {
    var ref = this.props;
        var reverse = ref.reverse;
        var vertical = ref.vertical;
    var dimension = vertical ? 'height' : 'width';
    var handleWidth = Math.floor(dragHandle.offsetWidth / 2);
    var size = this.handlePosition + handleWidth;

    if (reverse) {
        size = this.trackWidth() - size;
    }

    selection.style[dimension] = size + "px";
};

SliderModel.prototype.adjustPadding = function adjustPadding (ticksContainer) {
    var totalTickSize = this.tickSizes.reduce(function (prev, curr) { return prev + curr; }, 0);
    var trackWidth = this.trackWidth();
    var reminder = trackWidth - totalTickSize;

    if (reminder !== 0) {
        var padding = reminder + this.elementOffset(this.track);
        ticksContainer.style.paddingTop = padding + "px";
    }
};

SliderModel.prototype.elementOffset = function elementOffset (element) {
    var ref = this.props;
        var vertical = ref.vertical;
    var style = getComputedStyle(element);

    return parseInt(vertical ? style.bottom : style.left, 10);
};

SliderModel.prototype.elementSize = function elementSize (element) {
    var ref = this.props;
        var vertical = ref.vertical;

    return vertical ? element.clientHeight : element.clientWidth;
};

var Model = function Model(value, animate) {
    if ( value === void 0 ) value = 0;

    this.handle = {
        transform: 'translateX(' + value + 'px)',
        transition: animate
    };
};

var DEFAULT_THRESHOLD = 5;

var noop = function () { /*noop*/ };

var SwitchController = function SwitchController(updateView, onChange) {
    var this$1 = this;
    if ( updateView === void 0 ) updateView = noop;
    if ( onChange === void 0 ) onChange = noop;

    this.handlePosition = 0;
    this.wrapperOffset = 0;
    this.handleOffset = 0;
    this.handleMargin = 4;

    this.updateView = updateView;
    this.onChange = onChange;

    this.change = function (checked) {
        this$1.checked = checked;

        this$1.updateView(this$1.updateModel(checked ? this$1.constrain : 0));

        this$1.onChange(checked);
    };

    this.limit = function (value) {
        if (value > this$1.constrain) {
            return this$1.constrain;
        }

        if (value < 0) {
            return 0;
        }

        return value;
    };

    this.addAnimation = function (model) {
        if (model.transition === true) {
            model.transition = 'all 200ms ease-out';
        } else {
            model.transition = 'none';
        }
        return model;
    };

    this.onPress = function (ref) {
        var pageX = ref.pageX;

        this$1.lastPressX = this$1.originalPressX = pageX;
    };

    this.onRelease = function (ref) {
        var pageX = ref.pageX;

        var delta = Math.abs(this$1.originalPressX - pageX);
        var snapPoint = this$1.constrain / 2;
        var checked = delta < DEFAULT_THRESHOLD ? !this$1.checked : this$1.handlePosition > snapPoint;

        this$1.change(checked);
    };

    this.onDrag = function (ref) {
        var pageX = ref.pageX;

        var ref$1 = this$1.coords;
        var left = ref$1.left;
        var right = ref$1.right;
        var overElement = pageX > left && pageX < right;

        if (overElement) {
            var delta = this$1.reverse ? this$1.lastPressX - pageX : pageX - this$1.lastPressX;
            var position = this$1.limit(this$1.handlePosition + delta);

            this$1.lastPressX = pageX;
            this$1.handlePosition = position;
            this$1.updateView(this$1.updateModel(this$1.handlePosition));
        }
        if (pageX > right) {
            this$1.updateView(this$1.updateModel(this$1.reverse ? 0 : this$1.constrain));
        }

        if (pageX < left) {
            this$1.updateView(this$1.updateModel(this$1.reverse ? 0 : this$1.constrain));
        }
    };
};

var prototypeAccessors = { constrain: {} };

prototypeAccessors.constrain.get = function () {
    return this.wrapperOffset - this.handleOffset - this.handleMargin;
};

SwitchController.prototype.updateState = function updateState (ref) {
        var wrapperOffset = ref.wrapperOffset;
        var handleOffset = ref.handleOffset;
        var checked = ref.checked;
        var animate = ref.animate; if ( animate === void 0 ) animate = true;
        var coords = ref.coords;
        var handleMargin = ref.handleMargin;
        var reverse = ref.reverse;

    this.wrapperOffset = wrapperOffset;
    this.handleOffset = handleOffset;
    this.coords = coords;
    this.handleMargin = handleMargin;

    this.checked = checked;
    this.reverse = reverse;

    this.updateView(this.updateModel(checked ? this.constrain : 0, animate));
};

SwitchController.prototype.updateModel = function updateModel (position, animate) {
        if ( animate === void 0 ) animate = true;

    var pos = this.reverse ? this.wrapperOffset / 2 - position : position;
    return new Model(pos, animate);
};

Object.defineProperties( SwitchController.prototype, prototypeAccessors );

exports.SliderModel = SliderModel;
exports.SliderUtil = SliderUtil;
exports.SwitchController = SwitchController;

//# sourceMappingURL=main.js.map
