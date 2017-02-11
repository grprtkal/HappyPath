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
    'firebase', 
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/homepage');
  
    $stateProvider
        .state('homepage', {
          url: '/',
          views: {
            "": {
              templateUrl: 'views/homepage.html', 
              controller: 'QuestionsAndAnswersCtrl', 
              controllerAs: 'questionsandanswers'
            }, 
            "header": {
              templateUrl: "views/header.html", 
              controller: 'QuestionsAndAnswersCtrl', 
              controllerAs: 'questionsandanswers'
            }, 
            "footer": {
              templateUrl: "views/footer.html"
            }
          }
        }) 
        .state('about', {
          url:'/about', 
          views: {
            "": {
              templateUrl: 'views/about.html'
            }, 
            "header": {
              templateUrl: "views/header.html", 
              controller: 'QuestionsAndAnswersCtrl', 
              controllerAs: 'questionsandanswers'
            }
          }
        })
});






