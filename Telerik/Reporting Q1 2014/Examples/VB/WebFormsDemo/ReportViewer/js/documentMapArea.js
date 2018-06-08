; (function (trv, $, window, document, undefined) {
    "use strict";

    var defaultOptions = {
    };

    function DocumentMapArea(placeholder, options) {
        options = $.extend({}, defaultOptions, options);

        var controller = options.controller;
        if (!controller) {
            throw "No controller (telerikReporting.reportViewerController) has been specified.";
        }

        var $placeholder = $(placeholder), $documentMap;

        init();

        function init() {
            $documentMap = $('<div></div>');
            $documentMap.appendTo(placeholder);
            attach();
        }

        function onTreeViewSelectionChanged(e) {
            var documentMapNode = this.dataItem(e.node),
                page = documentMapNode.page,
                id = documentMapNode.id;

            controller.navigateToPage(page, id);
        }

        function clearDocumentMap() {
            showDocumentMap([]);
        }

        function showDocumentMap(documentMap) {
            var hasDocumentMap = documentMap && !$.isEmptyObject(documentMap);

            if (hasDocumentMap) {
                var $treeView =
                    $documentMap.data("kendoTreeView");

                if (!$treeView) {
                    $documentMap.kendoTreeView({
                        dataTextField: "text",
                        select: onTreeViewSelectionChanged,
                        dataSource: documentMap
                    });
                }
                else {
                    $treeView.setDataSource(documentMap);
                }
            }

            setVisibility(hasDocumentMap);
        }
        
        function setVisibility(visible) {
            controller.setDocumentMapVisible({ visible: visible });
        }
        
        function isVisible() {
            var args = {};
            controller.getDocumentMapState(args);
            return args.visible;
        }
        
        function beginLoad() {
            $placeholder.addClass('loading');
        }
        
        function endLoad() {
            $placeholder.removeClass('loading');
        }
        
        var currentReport = null;

        function attach() {
            controller
                .beginLoadReport(function () {
                    beginLoad();

                    var r = controller.reportSource().report;
                    var vis = currentReport == r && isVisible();
                    currentReport = r;

                    clearDocumentMap();

                    setVisibility(vis);
                })

                .reportLoadComplete(function (event, args) {
                    if (args.documentMapAvailable) {
                        showDocumentMap(args.bookmarkNodes);
                    } else {
                        setVisibility(false);
                    }

                    endLoad();
                })

                .error(function (event, error) {
                    endLoad();
                    clearDocumentMap();
                })

                .getDocumentMapState(function (event, args) {
                    args.visible = !$placeholder.hasClass("hidden");
                    args.enabled = Boolean($placeholder.find('li').length);
                })

                .setDocumentMapVisible(function (event, args) {
                    (args.visible ? $.fn.removeClass : $.fn.addClass).call($placeholder, "hidden");
                })
            ;
        }
    };

    var pluginName = "telerik_ReportViewer_DocumentMapArea";

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new DocumentMapArea(this, options));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));