; (function (trv, $, window, document, undefined) {
    "use strict";

    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReporting.utils';
    }

    trv.HistoryManager = function (options) {
        var controller = options.controller;
        if (!controller) {
            throw "No controller (telerikReporting.reportViewerController) has been specified.";
        }

        var settings = options.settings,
            history = settings.history() || { records: [], position: -1 };

        controller
            .beforeLoadReport(function () {
                addToHistory();
            })

            .currentPageChanged(function() {
                updatePageInfo();
            })

            .error(function () {
                var currentRecord = getCurrentRecord();
                if (currentRecord) {
                    currentRecord.temp = true;
                }
            })
        ;
        
        function getCurrentRecord() {
            var records = history.records;
            if (records.length > 0) {
                return records[history.position];
            }
            return null;
        }
        
        function pushRecord(rec) {
            var records = history.records, position = history.position;
            
            records = Array.prototype.slice.call(records, 0, position + 1);

            records.push(rec);
            
            history.records = records;
            history.position = records.length - 1;

            saveSettings();
        }
        
        function saveSettings() {
            settings.history(history);
        }
        
        function updatePageInfo() {
            var currentRecord = getCurrentRecord();
            if (currentRecord) {
                currentRecord.pageNumber = controller.currentPageNumber();
                currentRecord.viewMode = controller.viewMode();

                saveSettings();
            }
        }

        function addToHistory() {
            var currentRecord = getCurrentRecord();
            var rs = controller.reportSource();
            if (currentRecord && currentRecord.temp) {
                currentRecord.reportSource = rs;
                delete currentRecord["temp"];
            }
            else if (!currentRecord || !utils.reportSourcesAreEqual(currentRecord.reportSource, rs)) {

                pushRecord({
                    reportSource: rs,
                    viewMode: controller.viewMode(),
                    pageNumber: 1
                });
            }
        }

        function exec(currentRecord) {
            controller.reportSource(currentRecord.reportSource); // triggers controller.refreshReport() through the parameters area
            controller.viewMode(currentRecord.viewMode); // triggers controller.refreshReport()
            controller.navigateToPage(currentRecord.pageNumber);
        }

        function canMove(step) {
            var position = history.position,
                length = history.records.length,
                newPos = position + step;
            
            return (0 <= newPos && newPos < length);
        }

        function move(step) {
            var position = history.position,
                length = history.records.length,
                newPos = position + step;
            
            if (newPos < 0) {
                newPos = 0;
            }
            else if (newPos >= length) {
                newPos = length - 1;
            }

            if (newPos != position) {
                history.position = newPos;
                saveSettings();
                
                exec(getCurrentRecord());
            }
        }

        return {
            back: function () {
                move(-1);
            },

            forward: function () {
                move(+1);
            },

            canMoveBack: function () {
                return canMove(-1);
            },

            canMoveForward: function () {
                return canMove(1);
            },
            
            loadCurrent: function() {
                var rec = getCurrentRecord();
                if (rec) {
                    exec(rec);
                }

                return Boolean(rec);
            }
        };
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));