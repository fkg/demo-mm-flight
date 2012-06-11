Ext.define('demo2.view.CustomerView', {
    extend: 'Ext.DataView',
    xtype: 'customerview',
    requires: ['demo2.store.CustomerStore'],

    config: {
        itemTpl: '<span>{name} ({frequentflyer})<br/>{booking} - {airline}<br/>{origin} - {destination}</span>',
        store: 'CustomerStore',
    }
});