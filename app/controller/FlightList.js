Ext.define('FlightDemo.controller.FlightList', {
    extend: 'Ext.app.Controller',
    requires: [
        'FlightDemo.view.page.FlightDetails',
    ],

    config: {
        refs: {
            main: 'mainview',
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
        if (!this.flightdetailspage) {
            this.flightdetailspage = Ext.create('FlightDemo.view.page.FlightDetails');
        }

        this.flightdetailspage.setRecord(record);

        this.getMain().push(this.flightdetailspage);
    },

});