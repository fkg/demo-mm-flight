Ext.define('FlightDemo.view.common.CustomerView', {
    extend: 'Ext.DataView',
    xtype: 'customerview',
    requires: ['FlightDemo.store.CustomerStore'],

    config: {
        itemTpl: '<span>{name} ({frequentflyer})<br/>{booking} - {airline}<br/>{origin} - {destination}</span>',
        store: 'CustomerStore',
        baseCls: 'customer-info',
        scrollable: false,
    }
});