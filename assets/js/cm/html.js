define([
    "dijit/registry",
    "dojo/dom",
    "dojo/ready"
], function (registry, dom, ready)
{
    var html = {};

    html.ATTR_I18N = "data-cm-i18n";
    html.ATTR_ITEM_ID = "data-cm-itemid";

    var viewChampionships = registry.byId("championshipView");
    html.getViewChampionships = function () { return viewChampionships; };
    var newChampionshipButton = dom.byId("newChampionshipButton");
    html.getNewChampionshipButton = function () { return newChampionshipButton };
    var championshipList = dom.byId("championshipList");
    html.getChampionshipList = function () { return championshipList };

    return html;
});
