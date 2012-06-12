Ext.define('FlightDemo.view.page.FlightDetails', {
    extend: 'Ext.Panel',
    xtype: 'flightdetailspage',
    requires: [
        'FlightDemo.view.common.CustomerView',
    ],
    config: {
        items: [
            {
                xtype: 'customerview',
                height: 100,
            },
            {
                id: 'content',
                itemTpl: '<tpl for="flight"><span>({number}) {from}-{to}</span><br/></tpl>',
                height: 300,
            }
        ],
        record: null,
    }
});