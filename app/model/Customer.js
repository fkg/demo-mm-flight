Ext.define('FlightDemo.model.Customer', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'name',
            'frequentflyer',
            'booking',
            'airline',
            'origin',
            'destination'
        ],
    }
});