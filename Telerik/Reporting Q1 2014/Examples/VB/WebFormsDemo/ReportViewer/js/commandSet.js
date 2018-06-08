; (function (trv, $, window, document, undefined) {
    "use strict";

    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReporting.utils';
    }
    
    var scaleTransitionMap = {};
    scaleTransitionMap[trv.ScaleModes.FIT_PAGE] = { scaleMode: trv.ScaleModes.FIT_PAGE_WIDTH };
    scaleTransitionMap[trv.ScaleModes.FIT_PAGE_WIDTH] = { scaleMode: trv.ScaleModes.SPECIFIC, scale: 1.0 };
    scaleTransitionMap[trv.ScaleModes.SPECIFIC] = { scaleMode: trv.ScaleModes.FIT_PAGE };

    var scaleValues = [0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 4, 8];

    function CommandSet(options) {
        var controller = options.controller;
        if (!controller) {
            throw "No options.controller.";
        }

        var historyManager = options.history;
        if (!historyManager) {
            throw "No options.history.";
        }

        function getDocumentMapVisible() {
            var args = {};
            controller.getDocumentMapState(args);
            return Boolean(args.visible);
        }

        function getParametersAreaVisible() {
            var args = {};
            controller.getParametersAreaState(args);
            return Boolean(args.visible);
        }

        return {
            'historyBack': new command(function () { historyManager.back(); }),

            'historyForward': new command(function () { historyManager.forward(); }),

            'goToPrevPage': new command(function () {
                controller.navigateToPage(controller.currentPageNumber() - 1);
            }),

            'goToNextPage': new command(function () {
                controller.navigateToPage(controller.currentPageNumber() + 1);
            }),

            'goToFirstPage': new command(function () {
                controller.navigateToPage(1);
            }),

            'goToLastPage': new command(function () {
                controller.navigateToPage(controller.pageCount());
            }),

            'goToPage': new command(function (pageNumber) {
                if (!isNaN(pageNumber)) {
                    var pageCount = controller.pageCount();

                    if (pageNumber > pageCount) {
                        pageNumber = pageCount;
                    }
                    else if (pageNumber < 1) {
                        pageNumber = 1;
                    }

                    controller.navigateToPage(pageNumber);

                    return pageNumber;
                }
            }),

            'refresh': new command(function () {
                controller.refreshReport(true);
            }),

            'export': new command(function (format) {
                if (format) {
                    controller.exportReport(format);
                }
            }),

            'print': new command(function () {
                controller.printReport();
            }),

            'togglePrintPreview': new command(function () {

                controller.viewMode(
                    controller.viewMode() == trv.ViewModes.PRINT_PREVIEW ?
                    trv.ViewModes.INTERACTIVE :
                    trv.ViewModes.PRINT_PREVIEW
                );

            }),

            'toggleDocumentMap': new command(function () {
                controller.setDocumentMapVisible({ visible: !getDocumentMapVisible() });
            }),

            'toggleParametersArea': new command(function () {
                controller.setParametersAreaVisible({ visible: !getParametersAreaVisible() });
            }),

            'zoom': new command(function (scale) {
                controller.scale({ scale: 1 });
            }),

            'zoomIn': new command(function () {
                zoom(1);
            }),

            'zoomOut': new command(function () {
                zoom(-1);
            }),

            'toggleSideMenu': new command(function () {
                $(controller).trigger('trv.TOGGLE_SIDE_MENU');
            }),

            'toggleZoomMode': new command(function () {
                var args = {};
                controller.getScale(args);
                controller.scale(scaleTransitionMap[args.scaleMode]);
            })
        };
        
        function zoom(step) {
            var args = {};
            controller.getScale(args);
            args.scale = getZoomScale(args.scale, step);
            args.scaleMode = trv.ScaleModes.SPECIFIC;
            controller.scale(args);
        }
        
        function getZoomScale(scale, steps) {
            var pos = -1,
                length = scaleValues.length;
            for (var i = 0; i < length; i++) {
                var value = scaleValues[i];
                if (scale < value) {
                    pos = i - 0.5;
                    break;
                }
                if (scale == value) {
                    pos = i;
                    break;
                }
            }

            pos = pos + steps;
            if (steps >= 0) {
                pos = Math.round(pos - 0.49);
            }
            else {
                pos = Math.round(pos + 0.49);
            }

            if (pos < 0) {
                pos = 0;
            }
            else if (pos > length - 1) {
                pos = length - 1;
            }

            return scaleValues[pos];
        }
    }
    
    trv.CommandSet = CommandSet;
    
    function command(execCallback) {
        var enabledState = true;
        var checkedState = false;

        var cmd = {
            enabled: function (state) {
                if (arguments.length == 0) {
                    return enabledState;
                }
                var newState = Boolean(state);

                // TODO: The event should not be triggered always. However, at the moment the state is not refreshed correctly if there is a check.
                enabledState = newState;
                $(this).trigger("enabledChanged");

                return cmd;
            },

            checked: function (state) {
                if (arguments.length == 0) {
                    return checkedState;
                }

                var newState = Boolean(state);

                // TODO: The event should not be triggered always. However, at the moment the state is not refreshed correctly if there is a check.
                checkedState = newState;
                $(this).trigger("checkedChanged");

                return cmd;
            },

            exec: execCallback
        };

        return cmd;
    }

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));