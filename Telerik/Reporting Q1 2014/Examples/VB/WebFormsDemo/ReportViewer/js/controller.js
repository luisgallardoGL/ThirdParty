; (function (trv, $, window, document, undefined) {
    'use strict';    

    var sr = trv.sr;
    if (!sr) {
        throw 'Missing telerikReportViewer.sr';
    }

    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReportViewer.utils';
    }

    var printManager = trv.printManager;
    if (!printManager) {
        throw 'Missing telerikReportViewer.printManager';
    }

    trv.ViewModes = {
        INTERACTIVE: 'INTERACTIVE',
        PRINT_PREVIEW: 'PRINT_PREVIEW'
    };

    var defaultOptions = {
        pagePollIntervalMs: 500,
        documentInfoPollIntervalMs: 2000
    };

    function ReportViewerController(options) {
        var controller = {},
            $controller = $(controller),
            clientId,
            reportInstanceId,
            reportDocumentId,
            registerClientDfd,
            reportInstanceDfd,
            getDocumentFormatsDfd,
            report,
            parameterValues,
            currentPageNumber,
            pageCount,
            viewMode = trv.ViewModes.INTERACTIVE,
            documentFormats,
            loader
        ;

        options = jQuery.extend({}, defaultOptions, options);

        var client = options.serviceClient;
        if (!client) {
            throw sr.noServiceClient;
        }

        clientId = options.settings.clientId();

        function setCleintId(id) {
            clientId = id;
            options.settings.clientId(clientId);
        }

        function getFormat() {
            if (viewMode === trv.ViewModes.PRINT_PREVIEW) {
                return 'HTML5';
            }
            return 'HTML5Interactive';
        }

        function isInitialized() {
            return Boolean(clientId);
        }

        function initializeClientAsync() {
            if (clientId) {
                return clientId;
            }

            if (registerClientDfd) {
                return registerClientDfd;
            }

            registerClientDfd = client.registerClient();

            $.when(registerClientDfd)
                .done(function (clientData) {
                    setCleintId(clientData.clientId);
                    registerClientDfd = null;
                })
                .fail(function (xhr, status, error) {
                    raiseError(formatXhrError(xhr, status, sr.errorRegisteringViewer));
                    registerClientDfd = null;
                });

            return registerClientDfd;
        }

        function registerInstanceAsync() {
            if (reportInstanceId) {
                return reportInstanceId;
            }

            if (reportInstanceDfd) {
                return reportInstanceDfd;
            }

            reportInstanceDfd = createReportInstanceAsync(report, parameterValues);

            $.when(reportInstanceDfd)
                .done(function(instanceData) {
                    setReportInstance(instanceData.instanceId);
                    reportInstanceDfd = null;
                })
                .fail(function() {
                    reportInstanceDfd = null;
                });

            return reportInstanceDfd;
        }

        function clearReportState(ignoreCache) {
            if (ignoreCache) {
                deleteReportInstance();
            }
            reportDocumentId = reportInstanceId = null;
            currentPageNumber = pageCount = 0;
        }

        function setReportInstance(id) {
            reportInstanceId = id;
        }

        function deleteReportInstance() {
            if (clientId && reportInstanceId) {
                client
                    .deleteReportInstance(clientId, reportInstanceId)
                    .fail(function (xhr, status, error) {
                        raiseError(formatXhrError(xhr, status, formatError(sr.errorDeletingReportInstance, reportInstanceId)));
                    });
            }
        }

        function formatError(args) {
            var len = args.length;
            if (len == 1) {
                return args[0];
            }

            if (len > 1) {
                return utils.stringFormat(args[0], Array.prototype.slice.call(args, 1));
            }

            return '';
        }

        function raiseError() {
            controller.error(formatError(arguments));
        }

        function createReportInstanceAsync(report, parameterValues) {
            throwIfNotInitialized();

            return client.createReportInstance(clientId, report, parameterValues);
        }

        function registerDocumentAsync(format, deviceInfo) {
            throwIfNotInitialized();
            throwIfNoReportInstance();

            return client.createReportDocument(clientId, reportInstanceId, format, deviceInfo);
        }

        function getDocumentInfoRecursive(deferred, clientId, instanceId, documentId, options) {
            client.getDocumentInfo(clientId, instanceId, documentId)
                .done(function (info, status, xhr) {
                    if (info && info.documentReady) {
                        deferred.resolve.apply(deferred, arguments);
                    }
                    else {
                        deferred.notify.apply(deferred, arguments);
                        window.setTimeout(
                            function() {
                                getDocumentInfoRecursive(deferred, clientId, instanceId, documentId, options);
                            },
                            options.documentInfoPollIntervalMs);
                    }
                })
                .fail(function () {
                    deferred.reject.apply(deferred, arguments);
                });
        }

        function getDocumentReadyAsync(clientId, instanceId, documentId, options) {
            var dfd = $.Deferred();

            getDocumentInfoRecursive(dfd, clientId, instanceId, documentId, options);

            return dfd.promise();
        }

        function ReportLoader(reportHost) {
            var loaderOptions = {};

            function onReportDocumentRegistered(id) {
                if (reportHost) {
                    reportDocumentId = id;

                    onBeginLoadReport();

                    getReportDocumentReady();
                }
            }

            function onBeforeLoadReport() {
                loaderOptions.documentInfoPollIntervalMs = options.pagePollIntervalMs;
                if (reportHost) {
                    reportHost.beforeLoadReport();
                }
            }

            function onBeginLoadReport() {
                if (reportHost) {
                    reportHost.beginLoadReport();
                }
            }

            function onReportLoadComplete(info) {
                if (reportHost) {
                    pageCount = info.pageCount;

                    reportHost.reportLoadComplete(info);
                }
            }

            function onReportLoadProgress(info) {
                if (reportHost) {
                    pageCount = info.pageCount;

                    reportHost.reportLoadProgress(info);
                }
            }

            function getReportDocumentReady() {
                throwIfNotInitialized();
                throwIfNoReportInstance();
                throwIfNoReportDocument();

                $.when(getDocumentReadyAsync(clientId, reportInstanceId, reportDocumentId, loaderOptions))
                    .done(function (info) {
                        onReportLoadComplete(info);
                    })
                    .fail(function (xhr, status, error) {
                        onError(formatXhrError(xhr, status, error));
                    })
                    .progress(function (info) {
                        onReportLoadProgress(info);
                    });
            }

            function onError() {
                if (reportHost) {
                    reportHost.error(formatError(arguments));
                }
            }

            function getPageRecursive(deferred, pageNo) {
                client
                    .getPage(clientId, reportInstanceId, reportDocumentId, pageNo)
                    .done(function (info, status, xhr) {
                        if (info && info.pageReady) {
                            deferred.resolve.apply(deferred, arguments);
                        } else {
                            deferred.notify.apply(deferred, arguments);
                            window.setTimeout(function () { getPageRecursive(deferred, pageNo); }, options.pagePollIntervalMs);
                        }
                    })
                    .fail(function () {
                        deferred.reject.apply(deferred, arguments);
                    });
            }

            function getPageAsync(pageNo) {
                var d = $.Deferred();
                getPageRecursive(d, pageNo);
                return d.promise();
            }

            function onBeginLoadPage(pageNo) {
                if (reportHost) {
                    reportHost.beginLoadPage(pageNo);
                }
            }

            function onPageLoadComplete(pageNo, pageInfo) {
                loaderOptions.documentInfoPollIntervalMs = options.documentInfoPollIntervalMs;
                if (reportHost) {
                    reportHost.pageReady(pageInfo);
                }
            }

            var loadPromise;

            function loadAsync() {
                if (reportInstanceId)
                    return reportInstanceId;

                if (loadPromise)
                    return loadPromise;

                var dfd = $.Deferred();

                loadPromise = dfd.promise();

                onBeforeLoadReport();

                var format = getFormat(),
                    deviceInfo = { ContentOnly: true }
                ;

                $.when(initializeClientAsync())
                    .then(
                        registerInstanceAsync,
                        function (xhr, status, error) {
                            dfd.reject(formatXhrError(xhr, status, sr.errorRegisteringClientInstance));
                        }
                    )
                    .then(
                        function () {
                            return registerDocumentAsync(format, deviceInfo);
                        },
                        function (xhr, status, error) {
                            dfd.reject(formatXhrError(
                                xhr,
                                status,
                                utils.stringFormat(sr.errorCreatingReportInstance, [report])));
                        }
                    )
                    .then(
                        function (documentData) {
                            dfd.resolve(documentData.documentId);
                        },
                        function (xhr, status, error) {
                            dfd.reject(formatXhrError(
                                xhr,
                                status,
                                utils.stringFormat(sr.errorCreatingReportDocument, [report, format])));
                        }
                    );

                $.when(loadPromise)
                    .done(function(id) {
                        onReportDocumentRegistered(id);
                        loadPromise = null;
                    })
                    .fail(function (error) {
                        onError(error);
                        loadPromise = null;
                    });

                return loadPromise;
            }

            return {
                beginLoad: function () {
                    loadAsync();
                },

                beginGetPage: function (pageNo) {
                    throwIfNotInitialized();
                    $.when(loadAsync())
                        .then(function() {
                            onBeginLoadPage(pageNo);
                            return getPageAsync(pageNo);
                        })
                        .done(function (info) {
                            onPageLoadComplete(pageNo, info);
                        })
                        .fail(function (xhr, status, error) {
                            onError(formatXhrError(xhr, status, error));
                        })
                        .progress(function () {

                        });
                },

                dispose: function() {
                    reportHost = null;
                }
            };
        }

        function formatXhrError(xhr, status, error) {
            var err;
            if (xhr) {
                var msg = JSON.parse(xhr.responseText);
                if (msg) {
                    err = msg.message;
                    if (msg.exceptionMessage) {
                        if (err) {
                            err += '<br/>';
                        }
                        err += msg.exceptionMessage;
                    }
                }
            }

            if (error) {
                err = error + ":<br/>" + err;
            }

            return (err || error);
        }

        function getReportPage(pageNo) {
            if (loader) {
                loader.beginGetPage(pageNo);
            }
        }

        function loadReportAsync(ignoreCache) {
            if (!report) {
                raiseError(sr.noReport);
                return;
            }

            if (loader) {
                loader.dispose();
                loader = null;
            }

            clearReportState(ignoreCache);

            loader = new ReportLoader(controller);
            loader.beginLoad();
        }

        function onExportStarted() {
            controller.exportStarted();
        }

        function onExportDocumentReady(args) {
            controller.exportReady(args);
        }

        function onPrintStarted() {
            controller.printStarted();
        }

        function onPrintDocumentReady(args) {
            controller.printReady(args);
        }

        function printReport() {
            throwIfNoReport();

            onPrintStarted();

            exportAsync("PDF", { ImmediatePrint: true })
                .then(
                    function (info) {
                        var url = client.formatDocumentUrl(info.clientId, info.instanceId, info.documentId);
                        onPrintDocumentReady({ url: url });
                        return url;

                    },
                    function (err) {
                        raiseError(err);
                    })
                .then(function (url) {

                    printManager.print(url);

                });
        }        

        function exportReport(format, deviceInfo) {
            throwIfNoReport();

            onExportStarted();

            exportAsync(format, deviceInfo)
                .then(
                    function (info) {
                        var url = client.formatDocumentUrl(info.clientId, info.instanceId, info.documentId);
                        onExportDocumentReady({ url: url });
                        return url;

                    },
                    function (err) {
                        raiseError(err);
                    })
                .then(function (url) {
                    window.open(url, "_self");
                });
        }

        function exportAsync(format, deviceInfo) {
            throwIfNoReport();

            var dfd = $.Deferred();

            var documentID;

            $.when(initializeClientAsync())
                .then(registerInstanceAsync)
                .then(
                    function () {
                        return registerDocumentAsync(format, deviceInfo);
                    },
                    function (xhr, status, error) {
                        dfd.reject(formatXhrError(xhr, status, error));
                    }
                )
                .then(
                    function (documentData) {
                        documentID = documentData.documentId;
                        return getDocumentReadyAsync(clientId, reportInstanceId, documentData.documentId, options);
                    },
                    function(xhr, status, error) {
                        dfd.reject(formatXhrError(xhr, status, error));
                    }
                )
                .then(
                    function (info) {
                        dfd.resolve({
                            clientId: clientId,
                            instanceId: reportInstanceId,
                            documentId: documentID
                        });
                    },
                    function (xhr, status, error) {
                        dfd.reject(formatXhrError(xhr, status, error));
                    }
                );

            return dfd.promise();
        }

        function execServerAction(actionId) {
            throwIfNoReport();
            throwIfNoReportInstance();
            throwIfNoReportDocument();

            $.when(client.execServerAction(clientId, reportInstanceId, reportDocumentId, actionId))
                .done(function () {
                    controller.refreshReport();
                })
                .fail(function (xhr, status, error) {
                    raiseError(formatXhrError(xhr, status, error));
                });
        }

        function throwIfNotInitialized() {
            if (!isInitialized()) {
                throw sr.controllerNotInitialized;
            }
        }

        function throwIfNoReportInstance() {
            if (!reportInstanceId) {
                throw sr.noReportInstance;
            }
        }

        function throwIfNoReportDocument() {
            if (!reportDocumentId) {
                throw sr.noReportDocument;
            }
        }

        function throwIfNoReport() {
            if (!report) {
                throw sr.noReport;
            }
        }

        function getEventHandlerFromArguments(args) {
            var arg0;
            if (args && args.length) {
                arg0 = args[0];
            }
            if (typeof arg0 == 'function') {
                return arg0;
            }
            return null;
        }

        function eventFactory(event, args) {
            var h = getEventHandlerFromArguments(args);
            if (h) {
                $controller.bind(event, h);
            } else {
                $controller.trigger(event, args);
            }
            return controller;
        }

        function loadParametersAsync(report, paramValues) {

            var d = new $.Deferred();

            $.when(initializeClientAsync())
                .then(
                    function() {
                        return client.getParameters(clientId, report, paramValues || parameterValues || {})
                    },
                    function(xhr, status, error) {
                        d.reject(formatXhrError(xhr, status, error));
                    }
                )
                .then(
                    function (args) {
                        d.resolve(args);
                    },
                    function (xhr, status, error) {
                        d.reject(formatXhrError(xhr, status, sr.unableToGetReportParameters));
                    }
                );

            return d.promise();
        }

        function getDocumentFormatsAsync() {
            if (documentFormats)
                return documentFormats;

            if (getDocumentFormatsDfd)
                return getDocumentFormatsDfd;

            getDocumentFormatsDfd = client.getDocumentFormats()
                .done(function (formats) {
                    documentFormats = formats;
                    getDocumentFormatsDfd = null;
                })
                .fail(function () {
                    getDocumentFormatsDfd = null;
                });

            return getDocumentFormatsDfd;
        }

        function getPageForBookmark(nodes, id) {
            if (nodes) {
                for (var i = 0, len = nodes.length; i < len; i++) {
                    var node = nodes[i];
                    if (node.id == id) {
                        return node.page;
                    } else {
                        var page = getPageForBookmark(node.items, id);
                        if (page) {
                            return page;
                        }
                    }
                }
            }
            return null;
        };

        function fixDataContractJsonSerializer(arr) {
            var dict = {};
            if (Array.isArray(arr)) {
                arr.forEach(function(pair) {
                    dict[pair.Key] = pair.Value;
                });
            }
            return dict;
        }

        var actionHandlers = {
            'toggleVisibility': function (args) {
                execServerAction(args.actionId);
            },

            'navigateToReport': function (args) {
                // Force the parameters manager to validate the parameters for the target report 
                // to convert single values to arrays for the multivalue parameters.
                loadParametersAsync(args.Report, fixDataContractJsonSerializer(args.ParameterValues))
                    .done(function (p) {
                        var params = {};

                        $.each(p || [], function () {
                            if (Boolean(this.value)) {
                                params[this.name] = this.value;
                            }
                        });

                        controller
                            .reportSource({
                                report: args.Report,
                                parameters: params
                            });

                        //controller.refreshReport();
                    })
                    .fail(function (error) {
                        raiseError(error);
                    });
            },

            'navigateToUrl': function (args) {
                window.open(args.Url, args.Target);
            },

            'navigateToBookmark': function (args) {
                var id = args,
                    page = getPageForBookmark(id);

                controller.navigateToPage(page, id);
            },
        };

        function executeReportAction(actionType, args) {
            var handler = actionHandlers[actionType];
            if (typeof handler === 'function') {
                window.setTimeout(function () { handler(args); }, 0);
            }
        }

        // --- A P I ---
        $.extend(
            controller,
            {
                reportSource: function(rs) {
                    if (!rs) {
                        return {
                            report: report,
                            parameters: $.extend({}, parameterValues)
                        };
                    } else {
                        report = rs.report;
                        parameterValues = rs.parameters;

                        controller.reportSourceChanged();

                        return this;
                    }
                },

                setParameters: function(paramValues) {
                    parameterValues = paramValues;
                },

                pageCount: function () {
                    return pageCount;
                },

                currentPageNumber: function (pageNo) {
                    if (pageNo === undefined)
                        return currentPageNumber;

                    var num = utils.tryParseInt(pageNo);
                    if (num != currentPageNumber) {
                        currentPageNumber = num;
                        this.currentPageChanged();
                    }

                    return this;
                },

                viewMode: function (vm) {
                    if (!vm) {
                        return viewMode;
                    }

                    if (viewMode != vm) {
                        viewMode = vm;

                        controller.viewModeChanged(vm);

                        if (report) {
                            controller.refreshReport();
                        }
                    }

                    return controller;
                },

                refreshReport: function (ignoreCache) {
                    return loadReportAsync(ignoreCache);
                },

                exportReport: function(format, deviceInfo) {
                    exportReport(format, deviceInfo);
                },

                printReport: function() {
                    printReport();
                },

                getReportPage: function(pageNumber) {
                    getReportPage(pageNumber);
                },

                executeReportAction: function(actionType, args) {
                    executeReportAction(actionType, args);
                },

                loadParameters: function (paramValues) {
                    return loadParametersAsync(report, paramValues);
                },

                getDocumentFormats: function () {
                    return getDocumentFormatsAsync();
                },

                clientId: function () {
                    return clientId;
                },


                // --- E V E N T S ---
                error: function() {
                    return eventFactory('trv.ERROR', arguments);
                },

                exportStarted: function() {
                    return eventFactory('trv.EXPORT_STARTED', arguments);
                },

                exportReady: function() {
                    return eventFactory('trv.EXPORT_DOCUMENT_READY', arguments);
                },

                printStarted: function() {
                    return eventFactory('trv.PRINT_STARTED', arguments);
                },

                printReady: function () {
                    return eventFactory('trv.PRINT_DOCUMENT_READY', arguments);
                },

                beforeLoadReport: function() {
                    return eventFactory('trv.BEFORE_LOAD_REPORT', arguments);
                },

                beginLoadReport: function() {
                    return eventFactory('trv.BEGIN_LOAD_REPORT', arguments);
                },

                reportLoadComplete: function() {
                    return eventFactory('trv.REPORT_LOAD_COMPLETE', arguments);
                },

                reportLoadProgress: function() {
                    return eventFactory('trv.REPORT_LOAD_PROGRESS', arguments);
                },

                beginLoadPage: function() {
                    return eventFactory('trv.BEGIN_LOAD_PAGE', arguments);
                },

                pageReady: function() {
                    return eventFactory('trv.PAGE_READY', arguments);
                },

                viewModeChanged: function () {
                    return eventFactory('trv.VIEW_MODE_CHANGED', arguments);
                },

                reportSourceChanged: function () {
                    return eventFactory('trv.REPORT_SOURCE_CHANGED', arguments);
                },

                navigateToPage: function () {
                    return eventFactory('trv.NAVIGATE_TO_PAGE', arguments);
                },

                currentPageChanged: function () {
                    //TODO: currentPageChanged, navigateToPage???
                    return eventFactory('trv.CURRENT_PAGE_CHANGED', arguments);
                },

                getDocumentMapState: function () {
                    return eventFactory('trv.GET_DOCUMENT_MAP_STATE', arguments);
                },

                setDocumentMapVisible: function () {
                    return eventFactory('trv.SET_DOCUMENT_MAP_VISIBLE', arguments);
                },

                getParametersAreaState: function () {
                    return eventFactory('trv.GET_PARAMETER_AREA_STATE', arguments);
                },

                setParametersAreaVisible: function () {
                    return eventFactory('trv.SET_PARAMETER_AREA_VISIBLE', arguments);
                },

                scale: function() {
                    return eventFactory('trv.PAGE_SCALE', arguments);
                },

                getScale: function() {
                    return eventFactory('trv.GET_PAGE_SCALE', arguments);
                }
            }
        );

        return controller;
    }

    trv.ReportViewerController = ReportViewerController;

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));
