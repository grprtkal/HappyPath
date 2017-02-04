"use strict";

angular.module("happyPathApp")
	.factory("LoginFactory", LoginFactory); 

    function LoginFactory() {
        var provider = new firebase.auth.FacebookAuthProvider();
    	var factory = {}; 

    	factory.facebookAuthentication = function() {
            firebase.auth()
                .signInWithPopup(provider)
                .then(function(data) {
                    var token = data["credential"]["accessToken"];
                    var user = data["user"]; 
                })
                .catch(function(error) {
                    var errorCode = error["code"];
                    var errorMessage = error["message"];
                    var email = error["email"];
                    var credential = error["credential"];
                });
    	}

    	return factory; 
	}