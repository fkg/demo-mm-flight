Ext.define('FlightDemo.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    requires: [
        'FlightDemo.view.page.FlightList'
    ],
    config: {
        navigationBar: {
            ui: 'light'
        },
        items: [
            {
                xtype: 'flightlistpage'
            }
        ]
    }
});