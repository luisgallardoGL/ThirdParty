﻿; (function (trv, $, window, document, undefined) {
    "use strict";

    trv.touchBehavior = function (dom, options) {
        var startDistance, ignoreTouch;

        init(dom);

        function init(element) {
            if (typeof $.fn.kendoTouch === 'function') {
                $(element)
                    .mousedown(function () {
                        ignoreTouch = true;
                    })
                    .mouseup(function () {
                        ignoreTouch = false;
                    })
                    .kendoTouch({
                        multiTouch: true,
                        enableSwipe: true,
                        swipe: function(e) {
                            if (!ignoreTouch) {
                                onSwipe(e);
                            }
                        },

                        gesturestart: function(e) {
                            if (!ignoreTouch) {
                                onGestureStart(e);
                            }
                        },

                        gestureend: function(e) {
                            if (!ignoreTouch) {
                                onGestureEnd(e);
                            }
                        },

                        gesturechange: function(e) {
                            if (!ignoreTouch) {
                                onGestureChange(e);
                            }
                        },
                        
                        doubletap: function(e) {
                            if (!ignoreTouch) {
                                onDoubleTap(e);
                            }
                        },
                        
                        touchstart: function(e) {
                            if (!ignoreTouch) {
                                fire('touchstart');
                            }
                        },
                    });
            }
        }
        
        function onDoubleTap(e) {
            fire('doubletap', e);
        }

        function onGestureStart(e) {
            startDistance = kendo.touchDelta(e.touches[0], e.touches[1]).distance;
        }

        function onGestureEnd(e) {
        }

        function onGestureChange(e) {
            var current = kendo.touchDelta(e.touches[0], e.touches[1]).distance;

            onPinch({
                distance: current,
                lastDistance: startDistance
            });

            startDistance = current;
        }

        function onSwipe(e) {
            fire('swipe', e);
        }

        function onPinch(e) {
            fire('pinch', e);
        }

        function fire(func, args) {
            var handler = options[func];
            if (typeof handler === 'function') {
                handler(args);
            }
        }
    };
    
}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));