
    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function MapSuccess(position) {
        console.log("GetLocation Success");

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
            
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
