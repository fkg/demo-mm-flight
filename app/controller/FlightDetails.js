Ext.define('FlightDemo.controller.FlightDetails', {
    extend: 'Ext.app.Controller',
    requires: [
        'FlightDemo.view.page.BookingReceipt',
    ],
    config: {
        refs: {
            main: 'mainview',
            flightDetailsPage: 'flightdetailspage',
            booknow: '#booknow',
        },
        control: {
            booknow: {
                tap: 'onBookNowTap'
            }
        }
    },

    launch: function() {
    },

    onBookNowTap: function() {
        if (!this.bookingreceiptpage) {
            this.bookingreceiptpage = Ext.create('FlightDemo.view.page.BookingReceipt');
        }

        this.bookingreceiptpage.setRecord(this.getFlightDetailsPage().getRecord());

        this.getMain().push(this.bookingreceiptpage);
    }

});