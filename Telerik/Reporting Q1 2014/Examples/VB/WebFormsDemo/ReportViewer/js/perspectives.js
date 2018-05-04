; (function (trv, $, window, document, undefined) {
    "use strict";
    
    trv.PerspectiveManager = function(dom, controller) {
        var $smallMenu = $(dom).find('.trv-menu-small'),
            perspectives = {
                'small': {
                    documentMapVisible: false,

                    parametersAreaVisible: false,

                    onDocumentMapVisibleChanged: function (e, args) {
                        if (args.visible) {
                            controller.setParametersAreaVisible({ visible: false });
                        }
                    },

                    onParameterAreaVisibleChanged: function (e, args) {
                        if (args.visible) {
                            controller.setDocumentMapVisible({ visible: false });
                        }
                    },

                    onBeforeLoadReport: function () {
                        controller.setParametersAreaVisible({ visible: false });
                        controller.setDocumentMapVisible({ visible: false });
                    },
                    
                    onNavigateToPage: function () {
                        controller.setParametersAreaVisible({ visible: false });
                        controller.setDocumentMapVisible({ visible: false });
                    }
                },
                'large': {
                    documentMapVisible: true,

                    parametersAreaVisible: true,
                    
                    onReportLoadComplete: function (event, args) {
                        if (args.documentMapAvailable) {
                            controller.setDocumentMapVisible({ visible: true });
                        }
                    }
                }
            },
            currentPerspective;

        function init() {
            currentPerspective = getPerspective();
            getState(perspectives[currentPerspective]);
        }

        function setPerspective(perspective) {
            getState(perspectives[currentPerspective]);

            currentPerspective = perspective;
            if (currentPerspective) {
                setState(perspectives[currentPerspective]);
            }
        }
        
        function onDocumentMapVisibleChanged(e, args) {
            dispatch('onDocumentMapVisibleChanged', arguments);
        }
        
        function onParameterAreaVisibleChanged(e, args) {
            dispatch('onParameterAreaVisibleChanged', arguments);
        }
        
        function onBeforeLoadReport() {
            dispatch('onBeforeLoadReport', arguments);
        }
        
        function onNavigateToPage() {
            dispatch('onNavigateToPage', arguments);
        }
        
        function onReportLoadComplete() {
            dispatch('onReportLoadComplete', arguments);
        }
        
        function onWindowResize() {
            var perspective = getPerspective();
            if (perspective != currentPerspective) {
                setPerspective(perspective);
            }
        }
        
        function dispatch(func, args) {
            var activePerspective = perspectives[currentPerspective];
            var handler = activePerspective[func];
            if (typeof handler === 'function') {
                handler.apply(activePerspective, args);
            }
        }

        function attach() {
            $(window).resize(onWindowResize);

            controller.setDocumentMapVisible(onDocumentMapVisibleChanged);
            controller.setParametersAreaVisible(onParameterAreaVisibleChanged);
            controller.beforeLoadReport(onBeforeLoadReport);
            controller.navigateToPage(onNavigateToPage);
            controller.reportLoadComplete(onReportLoadComplete);
        }

        function getPerspective() {
            return $smallMenu.css('display') != 'none' ? 'small' : 'large';
        }

        function getState(state) {
            state.documentMapVisible = documentMapVisible();
            state.parametersAreaVisible = parametersAreaVisible();
        }

        function setState(state) {
            documentMapVisible(state.documentMapVisible);
            parametersAreaVisible(state.parametersAreaVisible);
        }

        function documentMapVisible() {
            if (arguments.length == 0) {
                var args1 = {};
                controller.getDocumentMapState(args1);
                return args1.visible;
            }
            controller.setDocumentMapVisible({ visible: Boolean(arguments[0]) });
            return this;
        }

        function parametersAreaVisible() {
            if (arguments.length == 0) {
                var args1 = {};
                controller.getParametersAreaState(args1);
                return args1.visible;
            }
            controller.setParametersAreaVisible({ visible: Boolean(arguments[0]) });
            return this;
        }

        init();

        return {
            attach: attach
        };
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));