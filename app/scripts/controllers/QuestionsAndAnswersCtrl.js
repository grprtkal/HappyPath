'use strict';

angular
	.module('happyPathApp')
  	.controller('QuestionsAndAnswersCtrl', QuestionsAndAnswersController); 

  	QuestionsAndAnswersController.$inject = ["$scope", "QuestionsAndAnswersFactory", "SigninFactory"]
  
  	function QuestionsAndAnswersController($scope, QuestionsAndAnswersFactory, SigninFactory) {
      var vm = this; 
      vm.user = [];
      vm.userQuestionsAndAnswers = [];
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
              var questionTitle = questionObject["title"];
              ;

  		 				if("answers" in questionObject) {
                var answerKey =  Object.keys(questionObject["answers"]).toString()

  		 					matchQuestionsWithAnswers(questionTitle, answerKey); 
  		 				} else {
                vm.userQuestionsAndAnswers.push({"questionTitle": questionTitle}); 
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
  				
              //community questions and answers
  						if(param2 == answerId) {
  							vm.onlyQuestionsWithAnswers.push({"questionTitle": questionTitle, "answerBody": answerBody});
  						}

              //if user is signed in, show questions and answers
              if(param2 == answerId && vm.user !== null) {
                vm.userQuestionsAndAnswers.push({"questionTitle": questionTitle, "answerBody": answerBody});
              } 
  					}

  				})	
  		}

  		function addNewQuestion(param1, param2, param3) {
  			QuestionsAndAnswersFactory
          .addQuestions(param1, param2, param3);      
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
              showUserInfo(user);
            }
          });    
      }

      function showUserInfo(data) {
        vm.user.push(data); 
         
        return vm.user;
      }

  	}


