Ext.define('FlightDemo.store.FlightListingStore', {
    extend: 'Ext.data.Store',

    config: {
        proxy: {
            model: 'FlightDemo.model.FlightListing',
            type: 'ajax',
            url: 'resources/data/flightlisting.json',
            reader: {
                type: 'json',
                rootProperty: 'flightlisting'
            }
        },
        autoLoad: true
    }
});