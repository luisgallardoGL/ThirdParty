; (function (trv, $, window, document, undefined) {
    "use strict";

    trv.printManager = function () {
        var iframe;

        function printDesktop(src) {
            if (!iframe) {
                iframe = document.createElement("IFRAME");
                iframe.style.display = "none";
            }

            iframe.src = src;

            document.body.appendChild(iframe);
        }

        function printMobile(src) {
            window.open(src, '_self');
        }

        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        var printFunc = isMobile ? printMobile : printDesktop;

        return {
            print: function (src) {
                printFunc(src);
            },
        }
    }();
    
})(window.telerikReportViewer = window.telerikReportViewer || {}, window.jQuery, window, document);