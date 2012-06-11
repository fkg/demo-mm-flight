Ext.define('demo2.store.FlightListingStore', {
    extend: 'Ext.data.Store',

    config: {
        proxy: {
            model: 'demo2.model.FlightListing',
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