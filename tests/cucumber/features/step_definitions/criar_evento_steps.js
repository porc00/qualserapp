(function() {
  'use strict';

  module.exports = function() {
    this.Given(/^Eu estar logado$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.loginHelper.login(callback);
    });

    this.When(/^Evento Privado for selecionado$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.browser.
      click('.new-event').
      waitForExist('.private-event').
      waitForVisible('.private-event').
      click('.private-event').
      call(callback);
    });

    this.When(
      /^Ter convidado amigos ao não deixar o campo Convidados vazio$/,
      function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
      });

    this.When(/^Ter deixado o Campo Hora preenchido$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Ter deixado o Campo Local preenchido$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Ter deixado o Campo Descrição não\-vazio$/, function(
      callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^Incluir evento na Agenda do User$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^Enviar convites$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });



  }
}());
