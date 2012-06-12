Ext.define('FlightDemo.view.page.FlightDetails', {
    extend: 'Ext.Container',
    xtype: 'flightdetailspage',
    requires: [
        'FlightDemo.view.common.CustomerView'
    ],
    config: {
        title: 'Flight Details',
        layout: 'vbox',
        items: [
            {
                xtype: 'customerview',
            },
            {
                id: 'content',
                tpl: new Ext.XTemplate(
                    '<tpl for="flight"><span>({number}) {from}-{to}</span><br/></tpl>'
                ),
                style: 'color:red',
            },
            {
                id: 'booknow',
                xtype: 'button',
                html: 'Book Now',
            }
        ],
        record: null,
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});