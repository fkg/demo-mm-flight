Ext.define('FlightDemo.view.page.BookingReceipt', {
    extend: 'Ext.Panel',
    xtype: 'bookingreceiptpage',
    requires: [
        'FlightDemo.view.common.CustomerView',
    ],
    config: {
        title: 'Booking Receipt',
        items: [
            {
                xtype: 'customerview',
                height: 100,
            },
            {
                id: 'bookingcontent',
                tpl: new Ext.XTemplate(
                    '<tpl for="flight"><span>({number}) {from}-{to}</span><br/></tpl>'
                ),
                style: 'color:blue',
            }
        ],
        record: null,
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#bookingcontent').setData(newRecord.data);
        }
    }
});