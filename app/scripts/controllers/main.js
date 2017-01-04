'use strict';

angular.module('happyPathApp')
  .controller('MainCtrl', function ($scope, $firebaseObject) {  
    var database = firebase.database(); 
    var questionsRef = database.ref("questions"); 

    $scope.questions = $firebaseObject(questionsRef);
  });
