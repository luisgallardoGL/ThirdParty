; (function (trv, $, window, document, undefined) {
    "use strict";

    var stringFormatRegExp = /{(\w+?)}/g;

    var utils = trv.utils = {
        trim: function (s, charlist) {
            return this.rtrim(this.ltrim(s, charlist), charlist);
        },

        ltrim: function (s, charlist) {
            if (charlist === undefined) {
                charlist = "\s";
            }
            return s.replace(new RegExp("^[" + charlist + "]+"), "");
        },

        rtrim: function (s, charlist) {
            if (charlist === undefined) {
                charlist = "\s";
            }
            return s.replace(new RegExp("[" + charlist + "]+$"), "");
        },

        stringFormat: function (template, data) {
            var isArray = Array.isArray(data);
            return template.replace(stringFormatRegExp, function ($0, $1) {
                return data[isArray ? parseInt($1) : $1];
            });
        },

        tryParseInt: function (value) {
            if (/^(\-|\+)?([0-9]+)$/.test(value)) {
                return Number(value);
            }
            return NaN;
        },

        tryParseFloat: function (value) {
            if (/^(\-|\+)?([0-9]+(\.[0-9]+)?)$/.test(value)) {
                return Number(value);
            }
            return NaN;
        },

        parseToLocalDate: function (date) {
            if (date instanceof Date)
                return date;

            var isUtc = /Z|[\+\-]\d\d:?\d\d/i.test(date);

            if (!isUtc) {
                date += "Z";
            }

            return new Date(date);
        },

        adjustTimezone: function (date) {
            return new Date(
                Date.UTC(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds(),
                    date.getMilliseconds()
                )
            );
        },

        unadjustTimezone: function (date) {
            return new Date(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate(),
                date.getUTCHours(),
                date.getUTCMinutes(),
                date.getUTCSeconds(),
                date.getUTCMilliseconds()
            );
        },

        areEqual: function(v1, v2) {
            if (v1 instanceof Date && v2 instanceof Date) {
                // date1 == date2 is always false
                // ref: http://stackoverflow.com/questions/492994/compare-dates-with-javascript
                if (v1.getTime() !== v2.getTime()) {
                    return false;
                }
            }
            else if (v1 !== v2) {
                return false;
            }

            return true;
        },

        reportSourcesAreEqual: function (rs1, rs2) {
            if (rs1 && rs2 && rs1.report === rs2.report) {
                var params1 = [], params2 = [];

                if (rs1.parameters)
                    params1 = Object.getOwnPropertyNames(rs1.parameters);

                if (rs2.parameters)
                    params2 = Object.getOwnPropertyNames(rs2.parameters);

                if (params1.length === params2.length) {
                    for (var i = params1.length - 1; i >= 0; i--) {
                        var p = params1[i];
                        var v1 = rs1.parameters[p];
                        var v2 = rs2.parameters[p];

                        if (Array.isArray(v1)) {
                            if (!Array.isArray(v2))
                                return false;

                            if (v1.length !== v2.length)
                                return false;

                            for (var j = v1.length - 1; j >= 0; j--) {
                                if (!utils.areEqual(v1[j], v2[j])) {
                                    return false;
                                }
                            }
                        }
                        else if (!utils.areEqual(v1, v2))
                        {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        }
    };

    trv.domUtils = function () {
        function toPixels(value) {
            return parseInt(value, 10) || 0;
        }

        return {
            getMargins: function (dom) {
                var $target = $(dom);
                return {
                    left: toPixels($target.css('marginLeft')),
                    right: toPixels($target.css('marginRight')),
                    top: toPixels($target.css('marginTop')),
                    bottom: toPixels($target.css('marginBottom')),
                };
            },

            getPadding: function (dom) {
                var $target = $(dom);
                return {
                    left: toPixels($target.css('paddingLeft')),
                    right: toPixels($target.css('paddingRight')),
                    top: toPixels($target.css('paddingTop')),
                    bottom: toPixels($target.css('paddingBottom')),
                };
            },

            getBorderWidth: function (dom) {
                var $target = $(dom);
                return {
                    left: toPixels($target.css('borderLeftWidth')),
                    right: toPixels($target.css('borderRightWidth')),
                    top: toPixels($target.css('borderTopWidth')),
                    bottom: toPixels($target.css('borderBottomWidth')),
                };
            },

            scale: function (dom, scaleX, scaleY, originX, originY) {
                scaleX = scaleX || 1;
                scaleY = scaleY || 1;

                originX = originX || 0;
                originY = originY || 0;

                var scale = utils.stringFormat('scale({0}, {1})', [scaleX, scaleY]),
                    origin = utils.stringFormat('{0} {1}', [originX, originY]);

                $(dom)
                    .css('transform', scale)
                    .css('-moz-transform', scale)
                    .css('-ms-transform', scale)
                    .css('-webkit-transform', scale)
                    .css('-o-transform', scale)

                    .css('-moz-transform-origin', origin)
                    .css('-webkit-transform-origin', origin)
                    .css('-o-transform-origin', origin)
                    .css('-ms-transform-origin', origin)
                    .css('transform-origin', origin)
                ;
            }
        };
    }();

})(window.telerikReportViewer = window.telerikReportViewer || {}, window.jQuery, window, document);