require([
    "dojo/ready",
    "cm/template"
], function (ready)
{
    ready(function ()
    {
        require(["cm/view-transition"], function (transition)
        {
            transition.toChampionships(true);
        });
    });
});
