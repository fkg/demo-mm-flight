Ext.define('FlightDemo.view.page.FlightList', {
    extend: 'Ext.Panel',
    xtype: 'flightlistpage',
    requires: [
        'FlightDemo.view.common.CustomerView',
        'FlightDemo.view.common.FlightList'
    ],
    config: {
        title: 'Flight List',
        items: [
            {
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