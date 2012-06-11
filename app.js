Ext.application({
    name: 'demo2',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],
    stores: ['CustomerStore', 'FlightListingStore'],
    models: ['Customer', 'FlightListing'],

    launch: function() {
        // Initialize the main view
        Ext.Viewport.add({xclass: 'demo2.view.Main'});
    },
});
