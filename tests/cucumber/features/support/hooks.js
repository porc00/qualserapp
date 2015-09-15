(function() {

  'use strict';

  module.exports = function() {

    this.Before(function(event, callback) {
      console.log("User created");
      //the second argument of call assync has to be an array, and the first element is passed to the funcion beeing called
      this.ddp.callAsync("addUser", []).then(callback);
    })
  }

})();
