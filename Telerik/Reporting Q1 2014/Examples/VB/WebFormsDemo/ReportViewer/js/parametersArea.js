; (function (trv, $, window, document, undefined) {
    "use strict";

    var sr = trv.sr,
        utils = trv.utils,
        parameterValidators = trv.parameterValidators;

    var defaultOptions = {};

    function ParametersArea(placeholder, options, otherOptions) {
        options = $.extend({}, defaultOptions, options, otherOptions);

        var controller = options.controller;
        if (!controller) {
            throw "No controller (telerikReporting.reportViewerController) has been specified.";
        }

        var parameterEditors = [].concat(options.parameterEditors, trv.parameterEditors);

        var recentParameterValues, parameters;

        var $placeholder = $(placeholder),
            $content = $placeholder.find('.trv-parameters-area-content'),
            $errorMessage = $placeholder.find(".trv-error-message"),
            $previewButton = $placeholder.find(".trv-parameters-area-preview-button")
        ;

        var isNewReportSource;

        $previewButton.on('click', function () {
            if (allParametersValid()) {
                applyParameters();
            }
            
        });

        var parameterContainerTemplate = options.templates['trv-parameter'];

        function createParameterContainer() {
            return $(parameterContainerTemplate);
        }

        function createParameterUI(parameter) {
            var $container = createParameterContainer(),
                $editorPlaceholder = $container.find(".trv-parameter-value"),
                $title = $container.find(".trv-parameter-title"),
                $error = $container.find(".trv-parameter-error"),
                $errorMessage = $container.find(".trv-parameter-error-message"),

                editorFactory = selectParameterEditorFactory(parameter)
            ;

            $title
                .html(parameter.text)
                .attr('title', parameter.text);

            $errorMessage.html(parameter.Error);
            (parameter.Error ? $.fn.show : $.fn.hide).call($error);

            var editor = editorFactory.createEditor(
                $editorPlaceholder,
                {
                    templates: options.templates,

                    parameterChanged: function (parameter, newValue) {
                        try {
                            newValue = parameterValidators.validate(parameter, newValue);
                            $error.hide();
                            onParameterChanged(parameter, newValue);

                        } catch (error) {
                            parameter.Error = error;
                            $errorMessage.html(error);
                            $error.show();
                            enablePreviewButton(false);
                        }
                    }
                });

            editor.beginEdit(parameter);

            return $container;
        }

        function enablePreviewButton(enabled) {
            if (enabled) {
                $previewButton.prop('disabled', false);
                $previewButton.removeClass('k-state-disabled');
            }
            else {
                $previewButton.prop('disabled', true);
                $previewButton.addClass('k-state-disabled');
            }
        }

        function selectParameterEditorFactory(parameter) {
            var factory;
            $.each(parameterEditors, function () {
                if (this && this.match(parameter)) {
                    factory = this;
                }
                return !factory;
            });
            return factory;
        }

        function showError(error) {
            $errorMessage.html(error);
            (error ? $.fn.addClass : $.fn.removeClass).call($placeholder, "error");
        }

        function showPreviewButton() {
            (allParametersAutoRefresh(parameters) ? $.fn.removeClass : $.fn.addClass).call($placeholder, "preview");
        }

        function allParametersAutoRefresh() {
            var allAuto = true;
            $.each(parameters, function () {
                return (allAuto = (!this.isVisible || this.autoRefresh));
            });
            return allAuto;
        }

        function allParametersValid() {
            var allValid = true;
            $.each(parameters, function () {
                return (allValid = !this.Error);
            });
            return allValid;
        }

        function fill(newParameters) {
            recentParameterValues = {};
            parameters = newParameters || [];

            //$content.empty();

            var $parameterContainer,
                $tempContainer = $('<div></div>');

            $.each(parameters, function () {
                try {
                    this.value = parameterValidators.validate(this, this.value);
                } catch (e) {
                    this.Error = this.Error || e;
                }

                var hasError = Boolean(this.Error), hasValue = !hasError;
                if (hasValue) {
                    recentParameterValues[this.id] = this.value;
                }
                else {
                    this.Error = sr.invalidParameter;
                }

                if (this.isVisible) {
                    if ($parameterContainer = createParameterUI(this)) {
                        $tempContainer.append($parameterContainer);
                    }
                }
            });

            $content.empty();
            $content.append($tempContainer.children());

            showPreviewButton(parameters);
        }

        function applyParameters() {
            controller.setParameters(recentParameterValues);
            controller.refreshReport();
        }

        function allParametersValidForAutoRefresh() {
            var triggerAutoUpdate = true;

            for (var i = parameters.length - 1; triggerAutoUpdate && i >= 0; i--) {
                var p = parameters[i];

                triggerAutoUpdate =
                    (p.id in recentParameterValues) &&
                    (Boolean(p.autoRefresh) || !p.isVisible);
            }

            return triggerAutoUpdate;
        }

        function tryRefreshReport() {
            if (isNewReportSource || allParametersValidForAutoRefresh()) {
                isNewReportSource = false;
                applyParameters();
            }
        }

        function onParameterChanged(parameter, newValue) {

            delete parameter["Error"];

            parameter.value = newValue;
            recentParameterValues[parameter.id] = newValue;

            if (parameter.childParameters) {
                $.each(parameter.childParameters, function (i, name) {
                    delete recentParameterValues[name];
                });
            }

            if (parameter.childParameters) {
                loadParameters(recentParameterValues);
            }
            else {
                var allValid = allParametersValid();

                enablePreviewButton(allValid);

                if (allValid) {
                    tryRefreshReport();
                }
            }
        }

        function setParametersAreaVisibility(visible) {
            controller.setParametersAreaVisible({ visible: visible });
        }

        function hasVisibleParameters(params) {
            var result = false;
            $.each(params, function () {
                result = this.isVisible;
                return !result;
            });
            return result;
        }

        var loadingCount = 0;

        function beginLoad() {
            loadingCount++;
            $placeholder.addClass('loading');
        }

        function endLoad() {
            if (loadingCount > 0) {
                if (0 == --loadingCount) {
                    $placeholder.removeClass('loading');
                }
            }
        }

        function loadParameters(parameterValues) {
            beginLoad();

            $.when(controller.loadParameters(parameterValues))
                .done(function (parameters) {
                    // parameters ready
                    var needsParamsArea = hasVisibleParameters(parameters);
                    if (!needsParamsArea) {
                        setParametersAreaVisibility(false);
                    }

                    fill(parameters);
                    showError('');

                    if (needsParamsArea) {
                        setParametersAreaVisibility(true);
                    }

                    tryRefreshReport();

                    endLoad();
                })
                .fail(function (error) {
                    // An error has occured while load the parameters
                    endLoad();

                    fill([]);
                    
                    if ($placeholder.hasClass("hidden")) {
                        controller.error(error);
                    }
                    else {
                        showError(error);
                    }
                });
        }

        controller
            .reportSourceChanged(function () {
                isNewReportSource = true;
                //fill([]);
                showError();

                loadParameters(null);
            })

            .getParametersAreaState(function (event, args) {
                args.visible = !$placeholder.hasClass("hidden");
                args.enabled = Boolean($content.children().length);
            })

            .setParametersAreaVisible(function (event, args) {
                (args.visible ? $.fn.removeClass : $.fn.addClass).call($placeholder, "hidden");
            })

            .beforeLoadReport(function () {
                beginLoad();
            })

            .error(function () {
                endLoad();
            })

            .pageReady(function () {
                endLoad();
            })
        ;
    };

    var pluginName = "telerik_ReportViewer_ParametersArea";

    $.fn[pluginName] = function (options, otherOptions) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new ParametersArea(this, options, otherOptions));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));