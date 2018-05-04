; (function (trv, $, window, document, undefined) {
    "use strict";

    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReportViewer.utils';
    }
    
    trv.binder = {
        bind: function (element) {
            var args = Array.prototype.slice.call(arguments, 1);
            $(element).find('*[data-role]').each(function () {
                var $this = $(this),
                    f = $.fn[$this.attr('data-role')];

                if (typeof f === 'function') {
                    f.apply($this, args);
                }
            });
        }
    };

    function LinkButton(dom, options) {
        var cmd,
            $element = $(dom),
            dataCommand = $element.attr('data-command');

        if (dataCommand) {
            cmd = options.commands[dataCommand];
        }

        if (cmd) {
            $element
            .click(function (e) {
                if (cmd.enabled()) {
                    cmd.exec($(this).attr('data-command-parameter'));
                }
                else {
                    e.preventDefault();
                }
            });

            $(cmd)
                .bind("enabledChanged", function (e) {
                    (cmd.enabled() ? $.fn.removeClass : $.fn.addClass).call($element, "disabled");
                })
                .bind("checkedChanged", function (e) {
                    (cmd.checked() ? $.fn.addClass : $.fn.removeClass).call($element, "checked");
                })
            ;
        }
    }
    
    var linkButton_pluginName = "telerik_ReportViewer_LinkButton";

    $.fn[linkButton_pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, linkButton_pluginName)) {
                $.data(this, linkButton_pluginName, new LinkButton(this, options));
            }
        });
    };
    
    function PageNumberInput(dom, options) {
        var $element = $(dom),
            $controller = $(options.controller),
            cmd = options.commands['goToPage'];

        function setPageNumber(value) {
            $element.val(value);
        }

        $controller.bind('pageNumber', function (e, value) {
            setPageNumber(value);
        });

        $element.change(function () {
            var val = $(this).val();
            var num = utils.tryParseInt(val);
            if (num != NaN) {
                var result = cmd.exec(num);
                setPageNumber(result);
            }
        });

        $element.keydown(function (e) {
            if (e.which == 13) {
                $(this).change();
                return e.preventDefault();
            }
        });

        function validateValue(value) {
            return (/^([0-9]+)$/.test(value));
        }

        $element
            .keypress(function (event) {
                var newValue = $element.val() + String.fromCharCode(event.charCode);
                return validateValue(newValue);
            })
            .on('paste', function (event) {

            })
        ;

        //validator.onKeyPress($element, validateValue);
        //validator.onPaste($element, validateValue);
    }
    
    var pageNumberInput_pluginName = "telerik_ReportViewer_PageNumberInput";

    $.fn[pageNumberInput_pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pageNumberInput_pluginName)) {
                $.data(this, pageNumberInput_pluginName, new PageNumberInput(this, options));
            }
        });
    };
    

    function PageCountLabel(dom, options) {
        var $element = $(dom),
            $controller = $(options.controller);

        $controller.bind('pageCount', function (e, value) {
            $element.html(value);
        });
    }

    var pageCountLabel_pluginName = "telerik_ReportViewer_PageCountLabel";

    $.fn[pageCountLabel_pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pageCountLabel_pluginName)) {
                $.data(this, pageCountLabel_pluginName, new PageCountLabel(this, options));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));