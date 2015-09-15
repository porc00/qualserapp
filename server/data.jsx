Meteor.methods({
    addEvent: function(doc) {
        Events.insert(doc);
    }
})

Meteor.publish('UserEvents', function() {
    var id = this.userId;
    return Events.find({
        'createdBy': id
    });
});

Meteor.publish('UserList', function() {
    //attach schema to users would be a nice idea
    //like this it will bring alot of data to the client
    return Meteor.users.find({});
})
