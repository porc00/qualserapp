(function() {

  'use strict';

  Meteor.methods({
    addUser: function(opts) {
      Meteor.users.remove({});
      Accounts.createUser({
        username: 'porc00',
        email: "mymail@mail.com",
        password: "porc00"
      });
    }
  });

})();
