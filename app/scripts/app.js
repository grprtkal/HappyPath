'use strict';

/**
 * @ngdoc overview
 * @name happyPathApp
 * @description
 * # happyPathApp
 *
 * Main module of the application.
 */
angular
  .module('happyPathApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sign-up', {
        templateUrl: 'views/sign-up.html', 
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
