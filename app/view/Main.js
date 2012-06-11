Ext.define('demo2.view.Main', {
    extend: 'Ext.Panel',
    requires: [
        'demo2.view.CustomerView',
        'demo2.view.FlightList'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        items: [
            {
                docked: 'top',
                xtype: 'customerview',
                height: 100,
            },
            {
                xtype: 'flightlist',
                height: 300,
            }
        ]
    }
});