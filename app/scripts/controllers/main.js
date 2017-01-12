'use strict';

angular.module('happyPathApp')
  .controller('MainCtrl', function ($scope, $firebaseArray) {  
    var database = firebase.database();   
    
    var questionsRef = database.ref("questions"); 
    var answersRef = database.ref("answers"); 

    var questionsArray = $firebaseArray(questionsRef); 
    var answersArray = $firebaseArray(answersRef); 
    
    var questionsandanswersArray = []; 

    //show only questions with answers 

    questionsArray.$loaded()
    	.then(function() {
		    for(var i=0; i<questionsArray.length; i++) {
				var questionObject = questionsArray[i]; 
				var questionTitle = questionsArray[i]["title"]; 

				if('answers' in questionObject) {
					var answerKey =  Object.keys(questionObject["answers"]); 

					for(var j=0; j<answersArray.length; j++) { 
					    var answerId = answersArray[j]['$id']; 
						var answerBody = answersArray[j]['body']; 
					
						if(answerKey == answerId) {
							questionsandanswersArray.push({"question": questionTitle, "answer": answerBody}); 
						}				
					}
				}
			}
			$scope.questionsandanswersArray = questionsandanswersArray;
    	})

  });
