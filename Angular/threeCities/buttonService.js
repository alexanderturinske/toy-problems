(function () {
  'use strict';

  angular
    .module('ButtonService', [])
    .factory('ButtonFactory', ButtonFactory);

    ButtonFactory.$index = [];

    function ButtonFactory() {
      var ButtonFactory = {};
      ButtonFactory.showCity = function (index, array) {
        array[index].visible = !array[index].visible;
      };
      return ButtonFactory;
    }
})();
