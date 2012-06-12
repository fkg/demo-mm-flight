Ext.define('FlightDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        },
        control: {
        }
    },

    launch: function() {
        NativeBridge.setMessage('Which flight do you want?');
        NativeBridge.playTTS("female", "en-US", 'Which flight do you want?');
        NativeBridge.setGrammar(gGrammarUrlRoot + "/list.pl?type=list", null, this.listingGrammarHandler);
    },

    listingGrammarHandler: function(result) {
        NativeBridge.setMessage(null);
        if (result != null && result.length > 0) {
            var interp = result[0].interpretation;
            NativeBridge.setMessage(interp);
        } else {
            NativeBridge.setMessage('what?');
        }
        NativeBridge.setGrammar(gGrammarUrlRoot + "/list.pl?type=list", null, FlightDemo.app.getController('FlightDemo.controller.Main').listingGrammarHandler);
    },

});
