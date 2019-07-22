define([
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/text!cm/templates/championships/championships-list-item.html.twig"
], function (
    lang,
    domConstruct,
    tplChampionshipsListItem)
{
    const TPL_CHAMPIONSHIPS_LIST_ITEMS = 'championshipsListItems';
    const TWIG_TEMPLATES = {
        [TPL_CHAMPIONSHIPS_LIST_ITEMS]: tplChampionshipsListItem
    };

    var templates = {};
    for (let templateId in TWIG_TEMPLATES) {
        templates[templateId] = Twig.twig({
            autoescape: true,
            data: TWIG_TEMPLATES[templateId]
        });
    }

    function _renderTemplate(templateId, context)
    {
        var htmlString = templates[templateId].render(context);
        var htmlNode = domConstruct.toDom(htmlString);
        //TODO: translate
        //For now we will not support widgets in template
        return htmlNode;
    }

    return {
        renderChampionshipsListItems: lang.partial(_renderTemplate, TPL_CHAMPIONSHIPS_LIST_ITEMS)
    };
});
