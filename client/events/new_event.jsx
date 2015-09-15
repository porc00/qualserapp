Template.newEvent.events({
    'click [data-target="open-modal"]': function() {
        let nodeElement = jQuery('[name=guests]');
        Modal.openSelectModal(nodeElement, function() {
            return {
                options: findUsers()
            }
        });
    }
});

function findUsers() {
    var usersdb = Meteor.users.find().fetch();
    var users = [];
    usersdb.forEach(function(userdb) {
        let user = {};
        user.value = userdb._id;
        //gambiarration, attach schema to users and you wont need this
        user.name = userdb.username || userdb.profile.name;
        users.push(user);
    });

    return users;
}
