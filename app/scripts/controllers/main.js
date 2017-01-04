'use strict';

angular.module('happyPathApp')
  .controller('MainCtrl', function ($scope, $firebaseArray) {  
    var database = firebase.database(); 
    var questionsRef = database.ref("questions"); 

    $scope.questions = $firebaseArray(questionsRef);
  });
