; (function (trv, $, window, document, undefined) {
    "use strict";

    var sr = trv.sr,
        utils = trv.utils;
    
    trv.parameterValidators = function () {
        var validators = {};
        
        function validateParameter(parameter, value, validatorFunc, compareFunc) {
            var values = []
                .concat(value)
                .map(function(value1) {
                    return checkAvailbaleValues(parameter, validatorFunc(value1), compareFunc);
                });

            if (parameter.multivalue) {
                return values;
            }

            return values[0];
        }
        
        function isNull(parameter, value) {
            return parameter.allowNull && -1 != [null, '', undefined].indexOf(value);
        }
        
        function checkAvailbaleValues(parameter, value, compareFunc) {
            if (parameter.availableValues) {
                var found = false;
                $.each(parameter.availableValues, function (i, av) {
                    found = compareFunc(value, av.value);
                    return !found;
                });

                if (!found) {
                    if (parameter.allowNull && !value) {
                        return value;
                    }

                    throw sr.invalidParameter;
                }
            }

            return value;
        }
        
        validators[trv.ParameterTypes.STRING] = {
            validate: function (parameter, value) {
                return validateParameter(
                    parameter,
                    value,
                    function (value) {
                        if (!value) {
                            if (parameter.allowNull) {
                                return null;
                            }

                            if (parameter.allowBlank) {
                                return '';
                            }
                            
                            throw sr.parameterIsEmpty;
                        }
                        return value;
                    },
                    function(s1, s2) {
                        return s1 == s2;
                    }
                );
            }
        };

        validators[trv.ParameterTypes.FLOAT] = {
            validate: function (parameter, value) {
                return validateParameter(
                    parameter,
                    value,
                    function (value) {
                        var num = utils.tryParseFloat(value);
                        if (isNaN(num)) {
                            if (isNull(parameter, value)) {
                                return null;
                            }
                            throw sr.parameterIsEmpty;
                        }
                        return num;
                    },
                    function (f1, f2) {
                        return utils.tryParseFloat(f1) == utils.tryParseFloat(f2);
                    }
                );
            }
        };

        validators[trv.ParameterTypes.INTEGER] = {
            validate: function (parameter, value) {
                return validateParameter(
                    parameter,
                    value,
                    function (value) {
                        var num = utils.tryParseInt(value);
                        if (isNaN(num)) {
                            if (isNull(parameter, value)) {
                                return null;
                            }
                            throw sr.parameterIsEmpty;
                        }
                        return num;
                    },
                    function (n1, n2) {
                        return utils.tryParseInt(n1) == utils.tryParseFloat(n2);
                    }
                );
            }
        };

        validators[trv.ParameterTypes.DATETIME] = {
            validate: function (parameter, value) {
                return validateParameter(
                    parameter,
                    value,
                    function (value) {
                        if (parameter.allowNull && (value === null || value === '' || value === undefined)) {
                            return null;
                        }
                        if (!isNaN(Date.parse(value))) {
                            return utils.parseToLocalDate(value);
                        }
                        throw sr.invalidDateTimeValue;
                    },
                    function (d1, d2) {
                        d1 = utils.parseToLocalDate(d1);
                        d2 = utils.parseToLocalDate(d2);
                        return d1.getTime() == d2.getTime();
                    });
            }
        };

        validators[trv.ParameterTypes.BOOLEAN] = {
            validate: function (parameter, value) {
                return validateParameter(
                    parameter,
                    value,
                    function (value) {
                        if (-1 != ['true', 'false'].indexOf(('' + value).toLowerCase())) {
                            return Boolean(value);
                        }
                        if (isNull(parameter, value)) {
                            return null;
                        }
                        throw sr.parameterIsEmpty;
                    },
                    function (b1, b2) {
                        return Boolean(b1) == Boolean(b2);
                    });
            }
        };

        return {
            validate: function (parameter, value) {
                var v = validators[parameter.type];
                if (!v) {
                    throw utils.stringFormat(sr.cannotValidateType, parameter);
                }
                return v.validate(parameter, value);
            }
        };
    }();

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));