define([
    "cm/dto/Championship"
], function (
    Championship)
{
    return {

        getChampionships: function ()
        {
            //TODO: remove fake data
            var rows = [
                {id: 15, name: "Open Gipuzkoa 2019"},
                {id: 16, name: "Bera bera VB semana grande 2019"}
            ];
            return rows.map(d => new Championship(d));
        }
    };
});
