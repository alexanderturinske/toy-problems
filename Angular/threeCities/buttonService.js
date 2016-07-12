(function () {
  'use strict';

  angular
    .module('ButtonService', [])
    .factory('ButtonFactory', ButtonFactory);

    ButtonFactory.$index = [];

    function ButtonFactory() {
      var ButtonFactory = {};
      ButtonFactory.showCity = function (index) {
        console.log(index);
      };
      return ButtonFactory;
    }
})();
