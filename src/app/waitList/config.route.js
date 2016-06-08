(function() {
  'use strict';
  
  angular
    .module('app.waitList') // Invoking waitList module.
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider'];
  
  function configFunction($routeProvider) {
    $routeProvider.when('/waitlist', {
      templateUrl: 'app/waitList/waitList.html'     
    });
  } 
  
})();