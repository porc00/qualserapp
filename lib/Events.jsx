Events = new Meteor.Collection("events");
Schemas = {}

Schemas.Events = new SimpleSchema({
    title: {
        type: String,
        label: "Event Title",
        max: 200
    },
    description: {
        type: String,
        label: "Event description",
        max: 500
    },
    date: {
        type: Date,
        autoform: {
            type: "pickadate"
        },
        label: "Event Date"
    },
    location: {
        type: String,
        label: "Event location",
        custom: function() {
            helpers.geocode(this.value, function(result) {
                console.log("location found");
            }, function() {
                Events.simpleSchema().namedContext("insertEventForm").addInvalidKeys([{
                    name: "location",
                    type: "geoLocation"
                }]);
            })

        }
    },
    guests: {
        type: [String],
        optional: true,
        autoform: {
         type: "hidden"
     }

    },
    value: {
        type: Number,
        label: "Event Price",
        min: 0,
        optional: true
    },
    createdBy: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function() {
            return this.userId;
        }
    }
});

Events.attachSchema(Schemas.Events);
