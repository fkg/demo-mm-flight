Ext.define('demo2.view.FlightList', {
    extend: 'Ext.List',
    xtype: 'flightlist',
    requires: ['demo2.store.FlightListingStore'],

    config: {
        itemTpl: new Ext.XTemplate(
                '<tpl for="flight"><span>({number}) {from}-{to}</span><br/></tpl>'
            ),
        store: 'FlightListingStore',
        baseCls: 'my-dataview',
    }
});