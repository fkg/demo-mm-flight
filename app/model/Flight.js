Ext.define('FlightDemo.model.Flight', {
    extend: 'Ext.data.Model',


    config: {
        fields: ['number', 'from', 'to', 'departure', 'arrival'],
        belongsTo: 'FlightListing',
    }
});