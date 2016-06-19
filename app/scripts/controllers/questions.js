angular.module('happyPathApp')
  .controller('QuestionsCtrl', function ($scope) {
  	var ref = new Firebase("https://project-2563609008295793326.firebaseio.com"); 
  	var syncObject = $firebaseObject(ref); 

  	syncObject.$bindTo($scope, "data"); 
  });
