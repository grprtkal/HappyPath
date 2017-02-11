"use strict";

angular.module("happyPathApp")
	.factory("SigninFactory", SigninFactory); 

    SigninFactory.$inject = ["$firebaseAuth"]; 

    function SigninFactory($firebaseAuth) {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();  
        var authStatus = $firebaseAuth();    
    	var factory = {}; 
        
    	factory.facebookAuthentication = function() {
            firebase.auth()
                .signInWithPopup(facebookProvider)
                .then(function(result) {
                    var data = {
                        "token": result["credential"]["accessToken"],
                        "user": result["user"]
                    }

                    return data;
                })
                .catch(function(err) {
                    var error = {
                        "errorCode":  err["code"], 
                        "errorMessage": err["message"], 
                        "email": err["email"], 
                        "credential": err["credential"]
                    }

                    return error; 
                });
    	}

        factory.getAuthStatus = function() { 
            return authStatus;
        }

    	return factory; 
	}