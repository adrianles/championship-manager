define(["dojo/_base/declare"], function (declare)
{
    return declare(null, {

        _id: -1,
        _name: '',

        constructor: function (data)
        {
            this._id = data.id;
            this._name = data.name;
        },

        getId: function ()
        {
            return this._id;
        },

        getName: function ()
        {
            return this._name;
        }
    });
});
