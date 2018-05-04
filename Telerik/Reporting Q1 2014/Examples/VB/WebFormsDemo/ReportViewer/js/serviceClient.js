; (function (trv, $, undefined) {
    "use strict";

    var utils = trv.utils;
    if (!utils) {
        throw "Missing telerikReporting.utils";
    }

    var JSON_MIME_TYPE = "application/json",
        JSON_CONTENT_TYPE = "application/json; charset=UTF-8",
        HTTP_GET = "GET",
        HTTP_POST = "POST",
        HTTP_PUT = "PUT",
        HTTP_DELETE = "DELETE"
    ;

    var defaultOptions = {

    };

    trv.ServiceClient = function (options) {

        options = $.extend({}, defaultOptions, options);

        var baseUrl = utils.rtrim(options.address || options.baseUrl, '\\/');

        function validateClientID(clientID) {
            if (!clientID)
                throw "Invalid cliendID";
        }

        function urlFromTemplate(template, args) {
            args = $.extend({}, { baseUrl: baseUrl }, args);

            return utils.stringFormat(template, args);
        }

        return {
            _urlFromTemplate: urlFromTemplate,

            registerClient: function (settings) {
                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_POST,
                        url: urlFromTemplate("{baseUrl}/clients"),
                        dataType: "json"
                    });

                return $.ajax(ajaxSettings);
            },

            unregisterClient: function (clientID, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_DELETE,
                        url: urlFromTemplate("{baseUrl}/clients/{clientID}", { clientID: clientID })
                    });

                return $.ajax(ajaxSettings);
            },

            getParameters: function (clientID, report, parameterValues, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_POST,
                        url: urlFromTemplate("{baseUrl}/clients/{clientID}/parameters", { clientID: clientID }),
                        contentType: JSON_CONTENT_TYPE,
                        dataType: 'json',
                        data: JSON.stringify({ report: report, parameterValues: parameterValues }),
                    });

                return $.ajax(ajaxSettings);
            },

            createReportInstance: function (clientID, report, parameterValues, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_POST,
                        url: urlFromTemplate("{baseUrl}/clients/{clientID}/instances", { clientID: clientID }),
                        contentType: JSON_CONTENT_TYPE,
                        dataType: 'json',
                        data: JSON.stringify({ report: report, parameterValues: parameterValues }),
                    });

                return $.ajax(ajaxSettings);
            },

            deleteReportInstance: function (clientID, instanceID, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_DELETE,
                        url: urlFromTemplate("{baseUrl}/clients/{clientID}/instances/{instanceID}", { clientID: clientID, instanceID: instanceID }),
                    });

                return $.ajax(ajaxSettings);
            },

            createReportDocument: function (clientID, instanceID, format, deviceInfo, settings) {
                validateClientID(clientID);

                deviceInfo = deviceInfo || {};

                deviceInfo["BasePath"] = baseUrl;

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_POST,
                        url: urlFromTemplate("{baseUrl}/clients/{clientID}/instances/{instanceID}/documents", { clientID: clientID, instanceID: instanceID }),
                        contentType: JSON_CONTENT_TYPE,
                        dataType: 'json',
                        data: JSON.stringify({ format: format, deviceInfo: deviceInfo }),
                    });

                return $.ajax(ajaxSettings);
            },

            deleteReportDocument: function (clientID, instanceID, documentID, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_DELETE,
                        url: urlFromTemplate(
                            "{baseUrl}/clients/{clientID}/instances/{instanceID}/documents/{documentID}",
                            { clientID: clientID, instanceID: instanceID, documentID: documentID }),
                    });

                return $.ajax(ajaxSettings);
            },

            getDocumentInfo: function (clientID, instanceID, documentID, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_GET,
                        url: urlFromTemplate(
                            "{baseUrl}/clients/{clientID}/instances/{instanceID}/documents/{documentID}/info",
                            {
                                clientID: clientID,
                                instanceID: instanceID,
                                documentID: documentID
                            }),
                        dataType: 'json'
                    });

                return $.ajax(ajaxSettings);
            },

            getPage: function (clientID, instanceID, documentID, pageNumber, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_GET,
                        url: urlFromTemplate(
                            "{baseUrl}/clients/{clientID}/instances/{instanceID}/documents/{documentID}/pages/{pageNumber}",
                            {
                                clientID: clientID,
                                instanceID: instanceID,
                                documentID: documentID,
                                pageNumber: pageNumber
                            }),
                        dataType: 'json'
                    });

                return $.ajax(ajaxSettings);
            },

            execServerAction: function (clientID, instanceID, documentID, actionID, settings) {
                validateClientID(clientID);

                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_PUT,
                        url: urlFromTemplate(
                            "{baseUrl}/clients/{clientID}/instances/{instanceID}/documents/{documentID}/actions/{actionID}",
                            {
                                clientID: clientID,
                                instanceID: instanceID,
                                documentID: documentID,
                                actionID: actionID
                            })
                    });

                return $.ajax(ajaxSettings);
            },

            formatDocumentUrl: function (clientID, instanceID, documentID) {
                return urlFromTemplate(
                    "{baseUrl}/clients/{clientID}/instances/{instanceID}/documents/{documentID}",
                    {
                        clientID: clientID,
                        instanceID: instanceID,
                        documentID: documentID,
                    });
            },

            getDocumentFormats: function (settings) {
                var ajaxSettings = $.extend(
                    {},
                    settings,
                    {
                        type: HTTP_GET,
                        url: urlFromTemplate("{baseUrl}/formats")
                    });

                return $.ajax(ajaxSettings);
            }
        };
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery));