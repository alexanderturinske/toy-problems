(function () {
  'use strict';

  angular
    .module('ThreeButtons', ['ButtonService'])
    .controller('ButtonController', ButtonController);

  ButtonController.$inject = ['ButtonFactory'];

  function ButtonController(ButtonFactory) {
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
    vm.textTime = '';
    vm.showInfo = function(index) {
      ButtonFactory.showCity(index);
    };
  }
})();
