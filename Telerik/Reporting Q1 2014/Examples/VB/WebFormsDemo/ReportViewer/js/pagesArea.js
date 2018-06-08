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

    var domUtils = trv.domUtils;

    var touchBehavior = trv.touchBehavior;
    if (!touchBehavior) {
        throw 'Missing telerikReportViewer.touch';
    }

    var defaultOptions = {
    };

    var scaleModes = trv.ScaleModes = {
        FIT_PAGE_WIDTH: 'FIT_PAGE_WIDTH',
        FIT_PAGE: 'FIT_PAGE',
        SPECIFIC: 'SPECIFIC'
    };

    function PagesArea(placeholder, options) {
        options = $.extend({}, defaultOptions, options);

        var controller = options.controller;
        if (!controller)
            throw 'No controller (telerikReportViewer.reportViewerController) has been specified.';

        var $placeholder = $(placeholder),
            $pageContainer = $placeholder.find('.trv-page-container'),
            pageContainer = $pageContainer[0],
            $errorMessage = $placeholder.find('.trv-error-message'),
            actions,
            pendingBookmark,
            pageScaleMode = scaleModes.SPECIFIC,
            pageScale = 1.0,
            minPageScale = 0.1 /* 10% */,
            maxPageScale = 8.0 /* 800% */,
            documentReady = true,
            navigateToPageOnDocReady,
            navigateToBookmarkOnDocReady,

            isNewReportSource,
            showErrorTimeoutId
        ;

        $(window).on('resize', function (event, args) {
            if (shouldAutosizePage()) {
                updatePageDimensions();
            }
        });

        enableTouch($placeholder);

        function clearPendingTimeoutIds() {
            if (showErrorTimeoutId) {
                window.clearTimeout(showErrorTimeoutId);
            }
        }

        function invalidateCurrentlyLoadedPage() {
            var page = findPage(navigateToPageOnDocReady);
            if (page) {
                pageNo(page, -1);
            }
        }

        function navigateWhenPageAvailable(pageNumber, pageCount) {
            if (pageNumber && pageNumber <= pageCount) {
                navigateToPage(pageNumber, navigateToBookmarkOnDocReady);
            }
        }

        function navigateOnLoadComplete(pageNumber, pageCount) {
            if (pageNumber) {
                var pageNumber = Math.min(pageNumber, pageCount);
                navigateToPage(pageNumber, navigateToBookmarkOnDocReady);
            }
        }

        function clearPage() {
            clear(isNewReportSource);
            isNewReportSource = false;
        }

        controller
            .reportSourceChanged(function () {
                isNewReportSource = true;
                navigateToPageOnDocReady = null;
                navigateToBookmarkOnDocReady = null;
                documentReady = false;
            })

            .beforeLoadReport(function () {
                documentReady = false;

                if (!navigateToPageOnDocReady)
                    navigateToPageOnDocReady = 1;


                clearPendingTimeoutIds();

                clear();

                disablePagesArea(true);
                showError(sr.loadingReport);
            })

            .beginLoadReport(function (event, args) {
                documentReady = true;

                invalidateCurrentlyLoadedPage();
            })

            .reportLoadProgress(function (event, args) {
                navigateWhenPageAvailable(navigateToPageOnDocReady, args.pageCount);

                showError(utils.stringFormat(sr.loadingReportPagesInProgress, [args.pageCount]));
            })

            .reportLoadComplete(function (event, args) {
                if (0 === args.pageCount) {
                    clearPage();
                    showError(sr.noPageToDisplay);
                }
                else {
                    navigateOnLoadComplete(navigateToPageOnDocReady, args.pageCount);

                    showError(utils.stringFormat(sr.loadedReportPagesComplete, [args.pageCount]));
                    showErrorTimeoutId = window.setTimeout(showError, 2000);

                    enableInteractivity();
                }
            })

            .navigateToPage(function (event, pageNumber, bookmark) {
                navigateToPage(pageNumber, bookmark);
            })

            .pageReady(function (event, page) {
                setPageContent(page);
                disablePagesArea(false);
            })

            .error(function (event, error) {
                disablePagesArea(false);
                clearPage();
                showError(error);
            })

            .exportStarted(function (event, args) {
                showError(sr.preparingDownload);
            })

            .exportReady(function (event, args) {
                showError();
            })

            .printStarted(function (event, args) {
                showError(sr.preparingPrint);
            })

            .printReady(function (event, args) {
                showError();
            })

            /*.viewModeChanged(function (event, viewMode) {
                
            })*/

            .scale(function (event, args) {
                setPageScale(args);
            })

            .getScale(function (event, args) {
                var page = getCurrentPage();
                var scale = $(page).data('pageScale') || pageScale;
                args.scale = scale;
                args.scaleMode = pageScaleMode;
            })

            .setDocumentMapVisible(function () {
                if (shouldAutosizePage()) {
                    updatePageDimensions();
                }
            })

            .setParametersAreaVisible(function () {
                if (shouldAutosizePage()) {
                    updatePageDimensions();
                }
            })
        ;

        function enableTouch(dom) {
            var allowSwipeLeft, allowSwipeRight;

            touchBehavior(
                dom,
                {
                    swipe: function (e) {
                        var pageNumber = controller.currentPageNumber();
                        if (allowSwipeLeft && e.direction == 'left') {
                            if (pageNumber < controller.pageCount()) {
                                controller.navigateToPage(pageNumber + 1);
                            }
                        } else if (allowSwipeRight && e.direction == 'right') {
                            if (pageNumber > 1) {
                                controller.navigateToPage(pageNumber - 1);
                            }
                        }
                    },

                    pinch: function (e) {
                        var page = getCurrentPage();
                        var scale = $(page).data('pageScale') || pageScale;
                        var f = e.distance / e.lastDistance;
                        setPageScale({
                            scale: scale * f,
                            scaleMode: trv.ScaleModes.SPECIFIC
                        });
                    },

                    doubletap: function (e) {
                        options.commands.toggleZoomMode.exec();
                    },

                    touchstart: function (e) {
                        var el = $pageContainer[0];

                        allowSwipeRight = 0 == el.scrollLeft;
                        allowSwipeLeft = (el.scrollWidth - el.offsetWidth) == el.scrollLeft;
                    }
                });
        }

        function shouldAutosizePage() {
            return -1 != [scaleModes.FIT_PAGE, scaleModes.FIT_PAGE_WIDTH].indexOf(pageScaleMode);
        }

        function updatePageDimensions() {
            for (var i = 0, children = pageContainer.childNodes, len = children.length; i < len; i++) {
                setPageDimensions(children[i], pageScaleMode, pageScale);
            }
        }

        function setPageScale(options) {
            pageScaleMode = options.scaleMode || pageScaleMode;

            var scale = pageScale;
            if ('scale' in options) {
                scale = options.scale;
            }

            pageScale = Math.max(minPageScale, Math.min(maxPageScale, scale));

            updatePageDimensions();
        }

        function clear(clearPageContainer) {
            disableInteractivity();

            pendingBookmark = undefined;

            if (clearPageContainer) {
                $pageContainer.empty();
            }

            showError();
        }

        function getCurrentPage() {
            return findPage(controller.currentPageNumber());
        }

        function findPage(pageNumber) {
            var page;
            $pageContainer.children().each(function (index, page1) {
                if (pageNo(page1) == pageNumber) {
                    page = page1;
                }
                return !page;
            });
            return page;
        }

        function navigateToPage(pageNumber, bookmark) {
            if (documentReady) {
                navigateToPageCore(pageNumber, bookmark);
            } else {
                navigateToPageOnDocumentReady(pageNumber, bookmark);
            }
        }

        function navigateToPageOnDocumentReady(pageNumber, bookmark) {
            navigateToPageOnDocReady = pageNumber;
            navigateToBookmarkOnDocReady = bookmark;
        }

        function navigateToPageCore(pageNumber, bookmark) {
            var page = findPage(pageNumber);
            if (page) {
                if (bookmark) {
                    navigateToBookmark(bookmark);
                }
            }
            else {
                pendingBookmark = bookmark;
                beginLoadPage(pageNumber);
            }
        }

        function navigateToBookmark(bookmark) {
            if (bookmark) {
                var el = $pageContainer.find('[data-bookmark-id=' + bookmark + ']')[0];
                if (el) {
                    var container = $pageContainer[0], offsetTop = 0, offsetLeft = 0;
                    while (el != container) {

                        if ($(el).is('.trv-page-wrapper')) {
                            var scale = $(el).data('pageScale');
                            if (typeof scale === "number") {
                                offsetTop *= scale;
                                offsetLeft *= scale;
                            }
                        }

                        offsetTop += el.offsetTop;
                        offsetLeft += el.offsetLeft;

                        el = el.offsetParent;
                    }
                    container.scrollTop = offsetTop;
                    container.scrollLeft = offsetLeft;
                }
            }
        }

        function disablePagesArea(disable) {
            (disable ? $.fn.addClass : $.fn.removeClass).call($placeholder, 'loading');
        }

        function showError(error) {
            $errorMessage.html(error);
            (error ? $.fn.addClass : $.fn.removeClass).call($placeholder, 'error');
        }

        function pageNo(page, no) {
            var $page = page.$ ? page : $(page), dataKey = 'pageNumber';

            if (no === undefined) {
                return $page.data(dataKey);
            }

            $page.data(dataKey, no);
            return page;
        }

        function beginLoadPage(pageNumber) {
            disablePagesArea(true);
            window.setTimeout(controller.getReportPage.bind(controller, pageNumber), 1);
            navigateToPageOnDocReady = null;
        }

        function setPageDimensions(page, scaleMode, scale) {
            var $target = $(page),                          /* .trv-page-wrapper */
                $page = $target.find('div.trv-report-page'),
                $pageContent = $target.find('div.sheet'),
                pageContent = $pageContent[0]
            ;

            if (!pageContent)
                return;

            var pageWidth,
                pageHeight,
                box = $target.data('box');

            if (!box) {
                var margins = domUtils.getMargins($target),
                    borders = domUtils.getBorderWidth($page),
                    padding = domUtils.getPadding($page);

                box = {
                    padLeft: (margins.left + borders.left + padding.left),
                    padRight: (margins.right + borders.right + padding.right),
                    padTop: (margins.top + borders.top + padding.top),
                    padBottom: (margins.bottom + borders.bottom + padding.bottom),
                };

                $target.data('box', box);
            }

            if ($target.data('pageWidth') === undefined) {
                pageWidth = pageContent.offsetWidth;
                pageHeight = pageContent.offsetHeight;

                $target.data('pageWidth', pageWidth);
                $target.data('pageHeight', pageHeight);
            } else {
                pageWidth = $target.data('pageWidth');
                pageHeight = $target.data('pageHeight');
            }

            // All dimensions from the styles:
            var scrollBarV = pageHeight > pageWidth && scaleMode == scaleModes.FIT_PAGE_WIDTH ? 20 : 0,
                scaleW = (pageContainer.clientWidth - scrollBarV - box.padLeft - box.padRight) / pageWidth,
                scaleH = (pageContainer.clientHeight - 1 - box.padTop - box.padBottom) / pageHeight
            ;

            if (scaleMode == scaleModes.FIT_PAGE_WIDTH) {
                scale = scaleW;
            }
            else if (!scale || scaleMode == scaleModes.FIT_PAGE) {
                scale = Math.min(scaleW, scaleH);
            }

            $target.data('pageScale', scale);

            domUtils.scale($pageContent, scale, scale);

            $page
                .css('height', scale * pageHeight)
                .css('width', scale * pageWidth);
        }

        function enableInteractivity() {
            $pageContainer.on('click', '[data-reporting-action]', onInteractiveItemClick);
        }

        function disableInteractivity() {
            $pageContainer.off('click', '[data-reporting-action]', onInteractiveItemClick);
        }

        function onInteractiveItemClick() {
            var $t = $(this);

            var actionId = $t.attr('data-reporting-action');
            var a = getAction(actionId);
            if (a) {
                var args = a.Value || {};

                args.actionId = actionId;

                navigateToPageOnDocReady = controller.currentPageNumber();

                disablePagesArea(true);
                showError(sr.loadingReport);
                controller.executeReportAction(a.Type, args);
            }
        }

        function getAction(actionId) {
            if (actions) {
                var action;
                $.each(actions, function () {
                    if (this.Id == actionId) {
                        action = this;
                    }
                    return (action === undefined);
                });

                return action;
            }
            return null;
        }

        function updatePageStyle(page) {
            //This is correct only for one page displaying mode.
            var styleId = "trv-" + controller.clientId() + "-styles";
            $("#" + styleId).remove();

            var pageStyles = $("<style id=" + styleId + "></style>");
            pageStyles.append(page.pageStyles);
            pageStyles.appendTo("head");
        }

        function setPageContent(page) {
            $pageContainer.empty();
            actions = JSON.parse(page.pageActions);
            updatePageStyle(page);

            var wrapper = $($.parseHTML(page.pageContent)),
                $pageContent = wrapper.find('div.sheet'),
                $page = $('<div class="trv-report-page"></div>')
            ;

            $pageContent
                .css('margin', 0);

            $page
                .append($pageContent)
                .append($('<div class="trv-page-overlay"></div>'))
            ;
            var pageNumber = page.pageNumber;
            var $target = $('<div></div>')
                .addClass('trv-page-wrapper active')
                .data('pageNumber', pageNumber)
                .append($page)
                .appendTo($pageContainer)
            ;

            controller.currentPageNumber(pageNumber);

            if (controller.viewMode() == trv.ViewModes.INTERACTIVE) {
                $placeholder.removeClass('printpreview');
                $placeholder.addClass('interactive');
            } else {
                $placeholder.removeClass('interactive');
                $placeholder.addClass('printpreview');
            }

            setPageDimensions($target, pageScaleMode, pageScale);

            navigateToBookmark(pendingBookmark);
        }
    };

    var pluginName = 'telerik_ReportViewer_PagesArea';

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new PagesArea(this, options));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));