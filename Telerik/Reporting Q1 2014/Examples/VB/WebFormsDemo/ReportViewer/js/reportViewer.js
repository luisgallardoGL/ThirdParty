; (function (trv, $, window, document, undefined) {
    "use strict";

    var sr = trv.sr;
    if (!sr) {
        throw 'Missing telerikReportViewer.sr';
    }

    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReportViewer.utils';
    }

    if (!trv.ServiceClient) {
        throw "Missing telerikReportViewer.ServiceClient";
    }

    if (!trv.ReportViewerController) {
        throw "Missing telerikReportViewer.ReportViewerController";
    }

    if (!trv.HistoryManager) {
        throw "Missing telerikReportViewer.HistoryManager";
    }

    var binder = trv.binder;
    if (!binder) {
        throw "Missing telerikReportViewer.Binder";
    }

    if (!trv.CommandSet) {
        throw "Missing telerikReportViewer.commandSet";
    }

    if (!trv.uiController) {
        throw "Missing telerikReportViewer.uiController";
    }

    var templateCache = function() {
        var cache = {};
        var pending = {};

        function loadComplete(url) {
            delete pending[url];
        }

        function beginLoad(url) {
            var p = pending[url];
            if (p) {
                return p;
            }

            var dfd = $.Deferred();

            pending[url] = p = dfd.promise();

            $.when($.get(url))
                .done(function (html) {
                    var templates = {};
                    $('<div></div>')
                        .html(html)
                        .find('template')
                        .each(function(index, e) {
                            var $e = $(e);
                            templates[$e.attr('id')] = utils.trim($e.html(), "\n ");
                        });

                    cache[url] = templates;

                    dfd.resolve(templates);
                    loadComplete(url);
                })
                .fail(function() {
                    dfd.reject();
                    loadComplete(url);
                });

            return p;
        }

        return {
            load: function(url) {
                var t = cache[url];
                if (t) {
                    return t;
                }

                return beginLoad(url);
            }
        };
    }();

    function MemStorage() {
        var data = {};
        return {
            getItem: function(key) {
                return data[key];
            },

            setItem: function (key, value) {
                data[key] = value;
            },

            removeItem: function (key) {
                delete data[key];
            },
        };
    }

    function ReportViewerSettings(id, storage, defaultSettings) {
        var $this = {};

        function getItem(key) {
            var value = storage.getItem(formatKey(key));
            return value != null ? value : defaultSettings[key];
        }

        function setItem(key, value) {
            storage.setItem(formatKey(key), value);
        }

        function formatKey(key) {
            return (id + '_' + key);
        }

        function value(key, args) {
            if (args.length) {
                setItem(key, args[0]);
                return $this;
            } else {
                return getItem(key);
            }
        }

        function valueFloat(key, args) {
            if (args.length) {
                setItem(key, args[0]);
                return $this;
            } else {
                return parseFloat(getItem(key));
            }
        }

        function valueObject(key, args) {
            if (args.length) {
                setItem(key, JSON.stringify(args[0]));
                return $this;
            } else {
                var value = getItem(key);
                return typeof value == 'string' ? JSON.parse(value) : null;
            }
        }

        $this = $.extend($this, {
            scale: function () {
                return valueFloat('scale', arguments);
            },

            scaleMode: function () {
                return value('scaleMode', arguments);
            },

            history: function () {
                return valueObject('history', arguments);
            },

            clientId: function () {
                return value('clientId', arguments);
            }
        });

        return $this;
    }

    var defaultOptions = {
        id: null,
        serviceUrl: null,
        templateUrl: null,
        reportSource: null,

        scale: 1.0,
        scaleMode: trv.ScaleModes.FIT_PAGE,
        viewMode: trv.ViewModes.INTERACTIVE,
        persistSession: false,

        parameterEditors: [],

        ready: function () { },
    };

    function ReportViewer(dom, options) {
        options = jQuery.extend({}, defaultOptions, options);
        if (!options.templateUrl) {
            throw sr.missingTemplate;
        }

        var $placeholder = $(dom),
            templates = {},
            persistanceKey = options.id || ('#' + $placeholder.attr('id'))
        ;

        var settings = new ReportViewerSettings(
            persistanceKey,
            options.persistSession ? window.sessionStorage : new MemStorage(),
            {
                scale: options.scale,
                scaleMode: options.scaleMode
            });

        var client = new trv.ServiceClient({
            address: options.serviceUrl
        });

        var controller = options.controller;

        if (!controller) {
            controller = new trv.ReportViewerController({
                serviceClient: client,
                settings: settings
            });
        }

        var history = new trv.HistoryManager({
            controller: controller,
            settings: settings
        });

        var commands = new trv.CommandSet({
            controller: controller,
            history: history
        });

        new trv.uiController({
            controller: controller,
            history: history,
            commands: commands
        });

        var viewer =
            {
                refreshReport: function (ignoreCache) {
                    if (arguments.length === 0) {
                        ignoreCache = true;
                    }
                    controller.refreshReport(ignoreCache);
                    return viewer;
                },

                reportSource: function (rs) {
                    if (rs) {
                        controller.reportSource(rs);
                        return viewer;
                    }

                    return controller.reportSource();
                },

                viewMode: function (vm) {
                    if (vm) {
                        controller.viewMode(vm);
                        return viewer;
                    }
                    return controller.viewMode();
                },

                scale: function(scale) {
                    if (scale) {
                        controller.scale(scale);
                        return viewer;
                    }

                    scale = {};
                    controller.getScale(scale);
                    return scale;
                }
            };

        function init() {
            $placeholder.html(templates['trv-report-viewer']);

            binder.bind(
                $placeholder,
                {
                    controller: controller,
                    commands: commands,
                    templates: templates
                },
                options
            );

            new trv.PerspectiveManager(dom, controller)
                .attach();

            $(controller).bind('trv.TOGGLE_SIDE_MENU', function () {
                window.setTimeout(function() { $placeholder.toggleClass("trv-side-menu-visible"); }, 1);
            });
        }

        function start() {
            init();

            controller.scale({
                scale: settings.scale(),
                scaleMode: settings.scaleMode()
            });

            if (!history.loadCurrent()) {
                if (options.viewMode) {
                    controller.viewMode(options.viewMode);
                }

                if (options.reportSource) {
                    controller.reportSource(options.reportSource);
                }
            }

            controller.scale(function() {
                var args = {};
                controller.getScale(args);

                settings.scale(args.scale);
                settings.scaleMode(args.scaleMode);
            });

            if (typeof options.ready == "function") {
                options.ready.call(viewer);
            }
        }

        // last!
        $.when(templateCache.load(options.templateUrl))
            .done(function (t) {
                templates = t;
                start();
            })
            .fail(function() {
                $placeholder.html(sr.errorLoadingTemplates);
            });

        return viewer;
    };

    var pluginName = "telerik_ReportViewer";

    jQuery.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new ReportViewer(this, options));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));