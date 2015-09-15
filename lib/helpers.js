// Collections helpers
SimpleSchema.messages({
    geoLocation: "Please provide a valid location"
})


// using this helpers object just to know where the functions
// come from when used in other files. consider using exports
helpers = {};


//Function to validate the location
//Im returning the first valid location
helpers.geocode = function(address, succesCallback, errCallback) {
    if (Meteor.isClient) {
        if (GoogleMaps.loaded()) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    succesCallback(results);
                } else {
                    errCallback(status);
                }
            });
        }
    }
}