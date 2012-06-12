Ext.application({
    name: 'FlightDemo',

    requires: [],

    controllers: [
        'Main',
        'FlightList',
        'FlightDetails',
    ],
    views: ['Main'],
    stores: ['CustomerStore', 'FlightListingStore'],
    models: ['Customer', 'FlightListing'],

    launch: function() {
        // Initialize the main view
        Ext.Viewport.add({
            xclass: 'FlightDemo.view.Main'
        });
    },
});
