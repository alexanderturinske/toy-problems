(function () {
  angular
    .module('ThreeButtons', [])
    .controller('ButtonController', ButtonController);

  ButtonController.$inject = [];

  function ButtonController() {
    var vm = this;
  }
})();
