var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.

    onDeviceReady: function() {
         this.receivedEvent('deviceready');
    
        
        
    }    
    ,receivedEvent: function(id) {
        var parentElement = document.getElementById(id);



        console.log('Received Event: ' + id);
    }
};

app.initialize();