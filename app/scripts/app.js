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
    'ngTouch', 
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'QuestionsAndAnswersCtrl', 
        controllerAs: 'questionsandanswers'
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
