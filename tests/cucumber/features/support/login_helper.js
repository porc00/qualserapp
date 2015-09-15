(function() {
  'use strict';

  module.exports = function() {

    this.Before(function(callback) {
      this.loginHelper = {
        login: function(callback) {
          global.
          browser.
          url(process.env.HOST).
          waitForExist('body *').
          waitForVisible('body *').
          click('.login-link-text').
          setValue('#login-username', 'porc00').
          setValue('#login-password', 'porc00').
          click('#login-buttons-password').
          waitForExist('#login-name-link').
          waitForVisible('#login-name-link').
          call(callback);
        }
      }
      callback();
    });
  }
}());
