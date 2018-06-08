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
    
    var loadingFormats, formatsLoaded, panelBar;

    function SideMenu(dom, options) {
        init(dom);
        
        function init(root) {
            panelBar = $(root).children('ul').kendoPanelBar().data('kendoPanelBar');
            panelBar.bind('expand', onSubmenuOpen);
            
            enableCloseOnClick(root);
            attachCommands(root);
            
            $(root).click(function (e) {
                if (e.target == root) {
                    $(options.controller).trigger('trv.TOGGLE_SIDE_MENU');
                }
            });
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

                    $.each(formats, function (i) {
                        var format = this;
                        var li = utils.stringFormat('<li><a href="#" data-command="export" data-command-parameter="{name}"><span>{localizedName}</span></a></li>', format);
                        panelBar.append(li, $parent);
                    });

                    attachCommands($parent);
                    enableCloseOnClick($parent);
                    
                    itemsToRemove.each(function () {
                        panelBar.remove($(this));
                    });
                });
        }

        function beginLoadFormats($item) {
            loadingFormats = true;
            panelBar.append({ text: sr.loadingFormats }, $item);

            $.when(options.controller.getDocumentFormats())
                .done(function (formats) {
                    formatsLoaded = true;
                    loadingFormats = false;

                    window.setTimeout(function () { fillFormats(formats); }, 0);

                    panelBar.unbind('expand', onSubmenuOpen);
                })
                .fail(function () {
                    loadingFormats = false;
                })
            ;
        }
        
        function enableCloseOnClick(root) {
            $(root).find("li").each(function () {
                var isLeaf = $(this).children('ul').length == 0;
                if (isLeaf) {
                    $(this).children('a').click(function () {
                        $(options.controller).trigger('trv.TOGGLE_SIDE_MENU');
                    });
                }
            });
        }
        
        function attachCommands(root) {
            $(root).find('a[data-command]').each(function () {
                attachCommand(this, options.commands);
            });
        }

        function attachCommand(element, model) {
            var $element = $(element),
                dataCommand = $element.attr('data-command'),
                cmd = dataCommand ? model[dataCommand] : null
                ;

            if (cmd) {
                $element
                .click(function (e) {
                    if (cmd.enabled()) {
                        var param = $(this).attr('data-command-parameter');
                        window.setTimeout( 
                            function () { cmd.exec(param); },
                            100); // the same as the transition duration in the .trv-side-menu class
                    }
                    else {
                        e.preventDefault();
                    }
                });

                $(cmd)
                    .bind("enabledChanged", function (e) {
                        (cmd.enabled() ? $.fn.removeClass : $.fn.addClass).call($element.parents('li'), "k-state-disabled");
                    })
                /*TODO: checked state.
                .bind("checkedChanged", function (e) {
                    (cmd.checked() ? $.fn.addClass : $.fn.removeClass).call($element.parent()[0], "k-state-default");
                }) */
                ;
            }
        }
    };
    
    var pluginName = "telerik_ReportViewer_SideMenu";

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new SideMenu(this, options));
            }
        });
    };

}(window.telerikReportViewer = window.telerikReportViewer || {}, jQuery, window, document));