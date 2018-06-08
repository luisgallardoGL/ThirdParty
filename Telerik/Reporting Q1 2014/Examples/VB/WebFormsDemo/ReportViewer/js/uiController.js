; (function (trv, $, window, document, undefined) {
    "use strict";

    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReporting.utils';
    }

    function uiController(options) {
        var stateFlags = {
            ExportInProgress: (1 << 0),
            PrintInProgress: (1 << 1)
        };
        
        function getState(flags) {
            return ((state & flags) != 0);
        }

        function setState(flags, value) {
            if (value) {
                state |= flags;
            }
            else {
                state &= ~flags;
            }
        }

        var controller = options.controller,
            historyManager = options.history,
            state = 0,
            refreshUI,
            commands = options.commands,
            $controller = $(controller)
        ;

        if (!controller) {
            throw "No controller (telerikReporting.ReportViewerController) has been specified.";
        }

        function getDocumentMapState() {
            var args = {};
            controller.getDocumentMapState(args);
            return args;
        }

        function getParametersAreaState() {
            var args = {};
            controller.getParametersAreaState(args);
            return args;
        }

        function updateUI() {
            if (!refreshUI) {
                refreshUI = true;
                window.setTimeout(function () {
                    try {
                        updateUICore();
                    } finally {
                        refreshUI = false;
                    }
                }, 10);
            }
        }

        function updateUICore() {

            var rs = controller.reportSource();
            var pageCount = controller.pageCount();
            var currentPageNumber = controller.currentPageNumber();

            var hasReport = (rs && rs.report);
            var hasPages = hasReport && pageCount > 0;

            var nextPage = hasPages && currentPageNumber < pageCount;
            var prevPage = hasPages && currentPageNumber > 1;

            var hasPage = hasPages && currentPageNumber;

            var documentMapState = getDocumentMapState();
            var parametersAreaState = getParametersAreaState();

            commands.goToFirstPage.enabled(prevPage);
            commands.goToPrevPage.enabled(prevPage);

            commands.goToLastPage.enabled(nextPage);
            commands.goToNextPage.enabled(nextPage);

            commands.goToPage.enabled(hasPages);

            commands.print.enabled(hasReport && !getState(stateFlags.PrintInProgress));

            commands.export.enabled(hasReport && !getState(stateFlags.ExportInProgress));

            commands.refresh.enabled(hasReport);

            commands.historyBack.enabled(historyManager && historyManager.canMoveBack());

            commands.historyForward.enabled(historyManager && historyManager.canMoveForward());

            commands.toggleDocumentMap
                .enabled(hasReport && documentMapState.enabled)
                .checked(documentMapState.visible);

            commands.toggleParametersArea
                .enabled(hasReport && parametersAreaState.enabled)
                .checked(parametersAreaState.visible);

            commands.togglePrintPreview
                .enabled(hasReport)
                .checked(controller.viewMode() == trv.ViewModes.PRINT_PREVIEW);

            commands.zoom.enabled(hasPage);
            commands.zoomIn.enabled(hasPage);
            commands.zoomOut.enabled(hasPage);
            commands.toggleZoomMode.enabled(hasPage);

            try {
                $controller
                    .trigger("pageNumber", currentPageNumber)
                    .trigger("pageCount", pageCount);
            }
            finally {
            }
        }

        function getScaleMode() {
            var args = {};

            controller.getScale(args);

            return args.scaleMode;
        }

        controller.scale(function (event, args) {
            commands
                .toggleZoomMode
                .checked(args.scaleMode == trv.ScaleModes.FIT_PAGE);
        });

        controller.currentPageChanged(updateUI);

        controller.beforeLoadReport(updateUI);

        controller.reportLoadProgress(updateUI);

        controller.reportLoadComplete(updateUI);

        controller.reportSourceChanged(updateUI);

        controller.viewModeChanged(updateUI());

        controller.setParametersAreaVisible(updateUI);

        controller.setDocumentMapVisible(updateUI);

        controller.exportStarted(function () {
            setState(stateFlags.ExportInProgress, true);
            updateUI();
        });

        controller.exportReady(function () {
            setState(stateFlags.ExportInProgress, false);
            updateUI();
        });

        controller.printStarted(function () {
            setState(stateFlags.PrintInProgress, true);
            updateUI();
        });

        controller.printReady(function () {
            setState(stateFlags.PrintInProgress, false);
            updateUI();
        });

        updateUI();
    };

    trv.uiController = uiController;

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));