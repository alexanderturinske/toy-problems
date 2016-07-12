(function () {
  'use strict';

  angular
    .module('ThreeButtons', [])
    .controller('ButtonController', ButtonController);

  ButtonController.$inject = [];

  function ButtonController() {
    var vm = this;
    vm.cities = [
      {
        id: 1,
        name: 'West Bend',
      },
      {
        id: 2,
        name: 'Oshkosh',
      },
      {
        id: 3,
        name: 'Rochester',
      },
    ];
  }
})();
