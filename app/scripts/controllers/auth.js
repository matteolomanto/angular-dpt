/**
 * Created by dloure on 12/14/14.
 */
'use strict';

app.controller("AuthCtrl", ["$scope", "$location", "Auth", "user", function($scope, $location, Auth, user){


  if (user) {
    //console.log("AuthCtrl: user exists -- redirect to homepage");
    //$location.path('/');
  }

  $scope.login = function() {
    var loginObj = {
      email: $scope.user.email,
      password: $scope.user.password
    };

    // call login method on Auth service and then redirect
    Auth.login(loginObj).then(function(authData){
      console.log("controllers/AuthCtrl:login()");
      console.log("Logged in as:", authData.uid);
      console.log("Redirecting to index");
      $location.path('/');

    }, function(error){
      console.log("controllers/AuthCtrl:login()");
      console.error("Authentication failed.");
      $scope.error = error.toString();
    });
  }
}]);
