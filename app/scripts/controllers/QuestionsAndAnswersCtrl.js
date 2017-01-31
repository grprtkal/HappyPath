'use strict';

angular
	.module('happyPathApp')
  	.controller('QuestionsAndAnswersCtrl', QuestionsAndAnswersController); 

  	QuestionsAndAnswersController.$inject = ["$scope", "QuestionsAndAnswersFactory"]
  
  	function QuestionsAndAnswersController($scope, QuestionsAndAnswersFactory) {
  		var vm = this; 
  		vm.onlyQuestionsWithAnswers = [];

  		activate(); 

  		function activate() {
  			getQuestionsWithAnswers(); 
  		}

  		function getQuestionsWithAnswers(){
  			QuestionsAndAnswersFactory
  				.getQuestions()
  				.$loaded()
  				.then(function(data) {
  					for(var i=0; i<data.length; i++) {
  						var questionObject = data[i];

		 				if("answers" in questionObject) {
		 					var questionTitle = questionObject["title"];
		 					var answerKey =  Object.keys(questionObject["answers"]).toString();

		 					matchQuestionsWithAnswers(questionTitle, answerKey); 
		 				}
  					}
  				
  				return vm.onlyQuestionsWithAnswers; 
  				
  				})
  		}

  		function matchQuestionsWithAnswers(param1, param2) {
  			QuestionsAndAnswersFactory
  				.getAnswers()
  				.$loaded()
  				.then(function(data) {
  					for(var i=0; i<data.length; i++) {
  						var answerId = data[i]['$id']; 
						var answerBody = data[i]['body']; 
						var questionTitle = param1; 
  				
						if(param2 == answerId) {
							vm.onlyQuestionsWithAnswers.push({"questionTitle": questionTitle, "answerBody": answerBody});
						}
  					}
  				})	
  		}
  	}


