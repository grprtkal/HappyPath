'use strict';

angular
	.module('happyPathApp')
  	.controller('QuestionsAndAnswersCtrl', QuestionsAndAnswersController); 

  	QuestionsAndAnswersController.$inject = ["$scope", "QuestionsAndAnswersFactory", "SigninFactory"]
  
  	function QuestionsAndAnswersController($scope, QuestionsAndAnswersFactory, SigninFactory) {
      var vm = this; 
  		vm.onlyQuestionsWithAnswers = [];
  		vm.addNewQuestion = addNewQuestion; 
      vm.signinFacebook = signinFacebook; 
     
  		activate(); 

  		function activate() {
  			getQuestionsWithAnswers(); 
        checkIfUserSignedIn(); 
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

  		function addNewQuestion(param1, param2) {
  			QuestionsAndAnswersFactory
  				.addQuestions(param1, param2); 
  		}

      function signinFacebook() {
        SigninFactory
          .facebookAuthentication();
      }

      function checkIfUserSignedIn() {
        SigninFactory
          .getAuthStatus()
          .$onAuthStateChanged(function(user) {
            if(user !== null) {
              vm.user = user;  

              return vm.user;   
            }
          });    
      }
  	}


