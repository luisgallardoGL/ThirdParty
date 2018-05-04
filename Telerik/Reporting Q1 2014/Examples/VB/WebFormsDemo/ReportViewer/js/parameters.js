; (function (trv, $, window, document, undefined) {
    'use strict';

    trv.ParameterTypes = {
        INTEGER: 'System.Int64',
        FLOAT: 'System.Double',
        STRING: 'System.String',
        DATETIME: 'System.DateTime',
        BOOLEAN: 'System.Boolean'
    };
    
    var sr = trv.sr,
        utils = trv.utils;

    var multivalueUtils = function () {
        var lineSeparator = '\n';
        return {
            formatValue: function (value) {
                var text = '';
                if (value) {
                    []
                        .concat(value)
                        .forEach(function (val) {
                            if (text.length > 0) {
                                text += lineSeparator;
                            }
                            text += val;
                        });
                }
                return text;
            },

            parseValues: function (text) {
                return ('' + text).split(lineSeparator);
            }
        };
    }();

    function integerInputBehavior(input) {
        function isValid(newValue) {
            return (/^(\-|\+)?([0-9]*)$/.test(newValue));
        }

        function onKeyPress(event) {
            return isValid($(input).val() + String.fromCharCode(event.charCode));
        }

        function onPaste(event) {

        }

        function attach(input) {
            $(input)
                .on('keypress', onKeyPress)
                .on('paste', onPaste);
        }

        function detach(input) {
            $(input)
                .off('keypress', onKeyPress)
                .off('paste', onPaste);
        }

        attach(input);

        return {
            dispose: function () {
                detach(input);
            }
        };
    }

    function floatInputBehavior(input) {
        function isValid(newValue) {
            return (/^(\-|\+)?([0-9]*(\.[0-9]*)?)$/.test(newValue));
        }

        function onKeyPress(event) {
            return isValid($(input).val() + String.fromCharCode(event.charCode));
        }

        function onPaste(event) {

        }

        function attach(input) {
            $(input)
                .on('keypress', onKeyPress)
                .on('paste', onPaste);
        }

        function detach(input) {
            $(input)
                .off('keypress', onKeyPress)
                .off('paste', onPaste);
        }

        attach(input);

        return {
            dispose: function () {
                detach(input);
            }
        };
    }


    /**
        EditorFactory:
        - function match(parameter)
        - function createEditor(placeholder, options)
            options.templates
            options.onParameterChanged
            returns: Editor

        Editor:
        - function beginEdit(parameter)
    */

    trv.parameterEditors = [
        {
            /** 
            
            Editor with Available Values - Multiselect
            
            */
            match: function (parameter) {
                return Boolean(parameter.availableValues) && parameter.multivalue;
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder);

                $placeholder.html(options.templates['trv-parameter-editor-available-values-multiselect']);

                var $list = $placeholder.find('.list'),
                    $selectAll = $placeholder.find('.select-all'),
                    $selectNone = $placeholder.find('.select-none'),
                    listView,
                    parameter,
                    updateTimeout,
                    valueChangeCallback = options.parameterChanged,
                    initialized
                ;

                $selectAll.click(function () {
                    setSelectedItems(parameter.availableValues.map(function (av) { return av.value; }));
                });

                $selectNone.click(function () {
                    setSelectedItems([]);
                });

                function onSelectionChanged(selection) {
                    if (initialized) {
                        notifyParameterChanged(selection);
                    }

                    var noSelection = selection.length == 0;
                    (noSelection ? $.fn.show : $.fn.hide).call($selectAll);
                    (!noSelection ? $.fn.show : $.fn.hide).call($selectNone);
                }

                function notifyParameterChanged(selection) {
                    var availableValues = parameter.availableValues,
                        values = $.map(selection, function (item) {
                            return availableValues[$(item).index()].value;
                        });

                    if (updateTimeout) {
                        window.clearTimeout(updateTimeout);
                    }

                    var immediateUpdate = !parameter.autoRefresh && !parameter.childParameters;

                    updateTimeout = window.setTimeout(
                        function () {
                            valueChangeCallback(parameter, values);
                            updateTimeout = null;
                        },
                        immediateUpdate ? 0 : 1000);
                }

                function getSelectedItems() {
                    return $(listView.element).find('.k-state-selected');
                }

                function onItemClick() {
                    $(this).toggleClass('k-state-selected');
                    onSelectionChanged(getSelectedItems());
                }

                function init() {
                    setSelectedItems(parameter.value);
                    $(listView.element).on('click', '.listviewitem', onItemClick);
                    initialized = true;
                }

                function clear() {
                    initialized = false;
                    if (listView) {
                        $(listView.element).off('click', '.listviewitem', onItemClick);
                    }
                }

                function setSelectedItems(items) {
                    setSelectedItemsCore(items);
                    onSelectionChanged(getSelectedItems());
                }

                function setSelectedItemsCore(items) {
                    if (!Array.isArray(items)) {
                        items = [items];
                    }
                    var children = listView.element.children();
                    $.each(parameter.availableValues, function (i, av) {
                        var selected = false;
                        $.each(items, function (j, v) {
                            var availableValue = av.value;
                            if (v instanceof Date) {
                                availableValue = utils.parseToLocalDate(av.value);
                            }
                            selected = utils.areEqual(v, availableValue);
                            return !selected;
                        });

                        (selected ? $.fn.addClass : $.fn.removeClass).call($(children[i]), 'k-state-selected');
                    });
                }

                return {
                    beginEdit: function (param) {
                        clear();

                        parameter = param;

                        $list.kendoListView({
                            template: '<div class="listviewitem">${name}</div>',
                            dataSource: { data: parameter.availableValues },
                            selectable: false,
                            //navigatable: true,
                        });

                        listView = $list.data('kendoListView');

                        init();
                    }
                };
            }
        },

        {
            /** 
            
            Editor with Available Values  
            
            */

            match: function (parameter) {
                return Boolean(parameter.availableValues) && !parameter.multivalue;
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder);

                $placeholder.html(options.templates['trv-parameter-editor-available-values']);

                var $list = $placeholder.find('.list'),
                    $selectNone = $placeholder.find('.select-none'),
                    listView,
                    parameter,
                    valueChangeCallback = options.parameterChanged
                ;

                if ($selectNone) {
                    $selectNone.click(function () {
                        listView.clearSelection();
                    });
                };

                function onSelectionChanged(selection) {
                    notifyParameterChanged(selection);
                }

                function notifyParameterChanged(selection) {
                    var availableValues = parameter.availableValues,
                        values = $.map(selection, function (item) {
                            return availableValues[$(item).index()].value;
                        });

                    if (Array.isArray(values)) {
                        values = values[0];
                    }

                    valueChangeCallback(parameter, values);
                }

                function getSelectedItems() {
                    return listView.select();
                }

                function onChange() {
                    onSelectionChanged(getSelectedItems());
                }

                function init() {
                    setSelectedItems(parameter.value);

                    listView.bind('change', onChange);
                }

                function reset() {
                    if (listView) {
                        listView.unbind('change', onChange);
                    }
                }

                function setSelectedItems(value) {
                    var items = listView.element.children();
                    $.each(parameter.availableValues, function (i, av) {
                        var availableValue = av.value;
                        if (value instanceof Date) {
                            availableValue = utils.parseToLocalDate(av.value);
                        }
                        if (utils.areEqual(value, availableValue)) {
                            listView.select(items[i]);
                            return false;
                        }
                        return true;
                    });
                }

                return {
                    beginEdit: function (param) {
                        reset();

                        parameter = param;

                        if ($selectNone && !param.allowNull) {
                            $selectNone.hide();
                        }

                        $list.kendoListView({
                            template: '<div class="listviewitem">${name}</div>',
                            dataSource: { data: parameter.availableValues },
                            selectable: true,
                            //navigatable: true,
                        });

                        listView = $list.data('kendoListView');

                        init();
                    }
                };
            }
        },

        {
            /** 
            
            Multi-value with NO AvailableValues value editor 
            
            */
            match: function (parameter) {
                return Boolean(parameter.multivalue);
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder), parameter;

                $placeholder.html(options.templates['trv-parameter-editor-multivalue']);

                var $textArea = $placeholder
                    .find('textarea')
                    .on('change', function () {
                        if (options.parameterChanged) {
                            options.parameterChanged(parameter, multivalueUtils.parseValues(this.value));
                        }
                    });

                return {
                    beginEdit: function (param) {
                        parameter = param;
                        $textArea.val(multivalueUtils.formatValue(param.value));
                    }
                };
            }
        },

        {
            /** 
            
            DateTime value editor 
            
            */
            match: function (parameter) {
                return parameter.type === trv.ParameterTypes.DATETIME;
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder), parameter;

                $placeholder.html(options.templates['trv-parameter-editor-datetime']);

                var dateTimePicker = $placeholder.find('input[type=datetime]')
                    .kendoDatePicker({
                        change: function () {
                            var handler = options.parameterChanged;
                            if (handler) {
                                var dtv = this.value();

                                if (null !== dtv) {
                                    dtv = utils.adjustTimezone(dtv);
                                }
                                
                                handler(parameter, dtv);
                            }
                        }
                    })
                    .data('kendoDatePicker');

                return {
                    beginEdit: function (param) {
                        parameter = param;
                        var dt = null;
                        try {
                            if (param.value) {
                                dt = utils.unadjustTimezone(param.value);
                            }                            
                        } catch(e) {
                            dt = null;
                        }
                        dateTimePicker.value(dt);
                    }
                };
            }
        },

        {
            /** Text value editor */
            match: function (parameter) {
                return parameter.type === trv.ParameterTypes.STRING;
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder), parameter;

                $placeholder.html(options.templates['trv-parameter-editor-text']);

                var $input = $placeholder
                    .find('input[type="text"]')
                    .change(function () {
                        if (options.parameterChanged) {
                            options.parameterChanged(parameter, $input.val());
                        }
                    });

                return {
                    beginEdit: function (param) {
                        parameter = param;
                        $input.val(parameter.value);
                    }
                };
            }
        },

        {
            /** 
            
            Numeric value editor 
            
            */
            match: function (parameter) {
                switch (parameter.type) {
                    case trv.ParameterTypes.INTEGER:
                    case trv.ParameterTypes.FLOAT:
                        return true;
                    default:
                        return false;
                }
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder),
                    parameter,
                    inputBehavior;

                $placeholder.html(options.templates['trv-parameter-editor-number']);

                var $input = $placeholder
                    .find('input[type=number]')
                    .on('change', function () {
                        if (options.parameterChanged) {
                            options.parameterChanged(parameter, $input.val()); /* parseInt/parseFloat */
                        }
                    })
                ;

                return {
                    beginEdit: function (param) {
                        if (inputBehavior) {
                            inputBehavior.dispose();
                        }

                        parameter = param;
                        $input.val(parameter.value);

                        if (parameter.type === trv.ParameterTypes.INTEGER) {
                            inputBehavior = integerInputBehavior($input);
                        } else {
                            inputBehavior = floatInputBehavior($input);
                        }
                    }
                };
            }
        },

        {
            /** 
            
            Boolean value editor 
            
            */
            match: function (parameter) {
                return parameter.type === trv.ParameterTypes.BOOLEAN;
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder), parameter;

                $placeholder.html(options.templates['trv-parameter-editor-boolean']);

                var $input = $placeholder
                    .find('input[type=checkbox]')
                    .on('change', function () {
                        if (options.parameterChanged) {
                            options.parameterChanged(parameter, this.checked);
                        }
                    })
                ;

                return {
                    beginEdit: function (param) {
                        parameter = param;
                        $input[0].checked = parameter.value === true;
                    }
                };
            }
        },

        {
            /** Any other */
            match: function (parameter) {
                return true;
            },

            createEditor: function (placeholder, options) {
                var $placeholder = $(placeholder);
                $placeholder.html('<div class="trv-parameter-editor-generic"></div>');
                return {
                    beginEdit: function (parameter) {
                        $placeholder.find('.trv-parameter-editor-generic').html(parameter.Error ? '(error)' : parameter.value);
                    }
                };
            }
        }
    ];
}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));