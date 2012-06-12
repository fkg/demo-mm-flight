Ext.define('FlightDemo.model.FlightListing', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['flight'],
        belongsTo: 'FlightData',
        hasMany: {model: 'Flight', name: 'flight'},
    }
});