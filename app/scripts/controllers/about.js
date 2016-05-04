'use strict';

/**
 * @ngdoc function
 * @name happyPathApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the happyPathApp
 */
angular.module('happyPathApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
