define([
    "cm/html",
    "cm/view/championships",
    "dojo/_base/lang"
], function (
    html,
    championships,
    lang)
{
    var currentView = html.getNullView();

    function _transitionToView(view, callback, isForward)
    {
        var dir = isForward ? 1 : -1;
        callback();
        currentView.performTransition(view.id, dir, "slide"); //Note: performTransition's callback doesen't work
        currentView = view;
    }

    return {
        toChampionships: lang.partial(_transitionToView, html.getViewChampionships(), championships.reload),
        toTest: lang.partial(_transitionToView, html.getViewTest())
    };
});
