Ext.define('FlightDemo.store.CustomerStore', {
    extend: 'Ext.data.Store',

    config: {
        proxy: {
            model: 'FlightDemo.model.Customer',
            type: 'ajax',
            url: 'resources/data/customer.json',
            reader: {
                type: 'json',
                rootProperty: 'customer'
            }
        },
        autoLoad: true
    }
});