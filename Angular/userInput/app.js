(function () {
  'use strict';

  angular
    .module('UserInput', [])
    .controller('UserController', UserController);

  UserController.$inject = [];

  function UserController() {
    var vm = this;
    this.name = 'Alexander';
  };
})();
