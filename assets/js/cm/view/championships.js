define([
    "cm/db",
    "cm/html",
    "cm/template",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "dojo/on",

    "dojo/query" //must be loaded for on.selector() to work
], function (
    db,
    html,
    template,
    domAttribute,
    domConstruct,
    on)
{
    const HTML_ATTR_ITEM_ID = html.ATTR_ITEM_ID;
    const HTML_SELECTOR_CHAMPIONSHIP_LIST_ITEM = ".championship[" + HTML_ATTR_ITEM_ID + "]";

    var view,
        newButton,
        list;

    function initialize()
    {
        view = html.getViewChampionships();
        newButton = html.getNewChampionshipButton();
        list = html.getChampionshipList();

        on("click", newButton, function ()
        {
            //TODO:
            console.log("Transition to new championship view"0);
        });
        on(list, on.selector(HTML_SELECTOR_CHAMPIONSHIP_LIST_ITEM, "click"), function (event)
        {
            var listItem = event.selectorTarget;
            var championshipId = parseInt(domAttribute.get(listItem, HTML_ATTR_ITEM_ID));
            //TODO:
            console.log("Transition to championship view for championship with ID " + championshipId);
        });
    }

    function refreshChampionshipList()
    {
        domConstruct.empty(list);
        var championships = db.getChampionships();
        var listItems = template.renderChampionshipsListItems({
            championships: championships
        });
        domConstruct.place(listItems, list);
    }

    function reload()
    {
        refreshChampionshipList();
    }

    initialize();

    return {
        reload: reload
    };
});
