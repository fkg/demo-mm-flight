Ext.define('demo2.store.CustomerStore', {
    extend: 'Ext.data.Store',

    config: {
        proxy: {
            model: 'demo2.model.Customer',
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