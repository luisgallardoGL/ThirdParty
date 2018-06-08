; (function (trv, $, window, document, undefined) {
    "use strict";

    var sr = trv.sr;
    if (!sr) {
        throw 'Missing telerikReportViewer.sr';
    }
    
    var utils = trv.utils;
    if (!utils) {
        throw 'Missing telerikReporting.utils';
    }

    function MainMenu(dom, options) {
        var menu = $(dom).data('kendoMenu'),
            loadingFormats,
            childrenL1;

        if (!menu) {
            init();
        }

        function init() {

            $(window).resize(function() {
                adjustMenuItemsLevel1();
            });

            menu = $(dom).kendoMenu().data('kendoMenu'),
            menu.bind('open', onSubmenuOpen);

            attachCommands(dom, options.commands);
            
            window.setTimeout(adjustMenuItemsLevel1, 100);
                }

        function adjustMenuItemsLevel1() {
            if (!childrenL1)
                childrenL1 = dom.childNodes;
            
            for (var i = childrenL1.length - 1; i >= 0; i--) {
                var el = childrenL1[i];

                if (el.style) {
                    var style = el.style;
                    var isVisible =
                        (style.display !== 'none');

                    if (!isVisible) {
                        style.display = '';
                    }

                    if (el.offsetTop > 0) {
                        style.display = 'none';
                    } else {
                        if (isVisible) {
                            break;
                        }
                    }
                }
            }
        }

        function onSubmenuOpen(e) {
            var $item = $(e.item);
            if ($item.children('ul[data-command-list=export-format-list]').length > 0) {
                onOpenFormatsMenu($item);
            }
        }

        function onOpenFormatsMenu($item) {
            if (!loadingFormats) {
                beginLoadFormats($item);
            }
        }

        function fillFormats(formats) {
            $(dom)
                .find('ul[data-command-list=export-format-list]')
                .each(function () {
                    var $list = $(this),
                        $parent = $list.parents('li'),
                        itemsToRemove = $list.children('li');
                    ;

                    $.each(formats, function () {
                        var format = this;
                        var li = utils.stringFormat('<li><a href="#" data-command="export" data-command-parameter="{name}"><span>{localizedName}</span></a></li>', format);
                        menu.append(li, $parent);
                    });

                    attachCommands($parent);
                    
                    itemsToRemove.each(function () {
                        menu.remove($(this));
                    });
                });
        }

        function beginLoadFormats($item) {
            loadingFormats = true;
            menu.append({ text: sr.loadingFormats }, $item);

            $.when(options.controller.getDocumentFormats())
                .done(function (formats) {
                    loadingFormats = false;

                    window.setTimeout(function () { fillFormats(formats); }, 0);

                    menu.unbind('open', onSubmenuOpen);
                })
                .fail(function () {
                    loadingFormats = false;
                })
            ;
        }

        function attachCommands(root) {
            $(root).find('a[data-command]').each(function () {
                attachCommand(this, options.commands);
            });
        }

        function attachCommand(element, commands) {
            var $element = $(element),
                dataCommand = $element.attr('data-command'),
                cmd = dataCommand ? commands[dataCommand] : null
            ;

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
                        (cmd.enabled() ? $.fn.removeClass : $.fn.addClass).call($element.parents('li'), "k-state-disabled");
                    })
                .bind("checkedChanged", function (e) {
                    (cmd.checked() ? $.fn.addClass : $.fn.removeClass).call($element.parents('li'), "k-state-selected");
                })
                ;
            }
        }
    };
    
    var pluginName = "telerik_ReportViewer_MainMenu";

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new MainMenu(this, options));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));