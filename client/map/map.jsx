Meteor.startup(function() {
    AutoForm.setDefaultTemplate('materialize');
});

Template.map.created = function() {
    this.showNewEventScreen = new ReactiveVar(false);
}

Template.map.helpers({
    mapOptions: function() {
        console.log("loading..", GoogleMaps.loaded());

        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 8
            };
        }
    },
    showNewEventScreen: function() {
        return Template.instance().showNewEventScreen.get();
    },
    showNewEventButton: function() {
        return Meteor.userId();
    }
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
