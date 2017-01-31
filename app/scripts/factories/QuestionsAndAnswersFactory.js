"use strict";

angular.module("happyPathApp")
	.factory("QuestionsAndAnswersFactory", QuestionsAndAnswersFactory); 

    QuestionsAndAnswersFactory.$inject = ["$firebaseArray"]; 

    function QuestionsAndAnswersFactory($firebaseArray) {
		var database = firebase.database();   
    	var questionsRef = database.ref("questions"); 
    	var answersRef = database.ref("answers"); 
    	var questionsArray = $firebaseArray(questionsRef); 
    	var answersArray = $firebaseArray(answersRef); 	
    	var factory = {}; 

    	factory.getQuestions = function() {
    		return questionsArray; 
    	}

    	factory.getAnswers = function() {
    		return answersArray;
    	}

    	return factory; 

	}




