(function() {
  'use strict';
  
  angular
    .module('app.landing')    // Invoking 'landing' module.
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider'];
  
  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/landing/landing.html'
    });
  }
  
})();
