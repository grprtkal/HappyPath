'use strict';

/**
 * @ngdoc function
 * @name happyPathApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyPathApp
 */
angular.module('happyPathApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
