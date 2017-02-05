"use strict";

angular.module("happyPathApp")
	.factory("LoginFactory", LoginFactory); 

    function LoginFactory() {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        var user = firebase.auth().currentUser; 
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

        factory.getUserProfileFromProvider = function() {
            if(user !=null) {
                return user["providerData"];                
            } else {
                return false; 
            }
        }

    	return factory; 
	}