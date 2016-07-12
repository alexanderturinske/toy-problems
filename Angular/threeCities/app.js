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
        visible: false,
      },
      {
        id: 2,
        name: 'Oshkosh',
        visible: false,
      },
      {
        id: 3,
        name: 'Rochester',
        visible: false,
      },
    ];
    vm.textTime = '';
    vm.showInfo = function(index, array) {
      ButtonFactory.showCity(index, array);
    };
  }
})();
