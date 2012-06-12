Ext.define('FlightDemo.view.common.FlightList', {
    extend: 'Ext.List',
    xtype: 'flightlist',
    requires: ['FlightDemo.store.FlightListingStore'],

    config: {
        itemTpl: new Ext.XTemplate(
                '<tpl for="flight"><span>({number}) {from}-{to}</span><br/></tpl>'
            ),
        store: 'FlightListingStore',
        baseCls: 'my-dataview',
        scrollable: false,
    }
});