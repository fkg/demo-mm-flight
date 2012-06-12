Ext.define('FlightDemo.controller.FlightList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            flightlist: 'flightlist',
        },
        control: {
            flightlist: {
                itemtap: 'onFlightListSelect'
            }
        }
    },

    launch: function() {
    },

    onFlightListSelect: function(list, index, node, record) {
    },

});