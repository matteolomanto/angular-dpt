/**
 * Created by dloure on 12/14/14.
 */
'use strict';

app.controller("AuthCtrl", ["$scope", "$location", "Auth", "user", function($scope, $location, Auth, user){

  if (user) {
    //console.log("AuthCtrl: user exists -- redirect to homepage");
    //$location.path('/');
  }

  $scope.login = function(loginObj) {

    var loginObj = {
      email: $scope.user.email,
      password: $scope.user.password
    };

    // call login method on Auth service and then redirect
    Auth.login(loginObj).then(function(authData){
      console.log("Logged in as:", authData.uid);
      console.log("Redirecting to index");
      console.dir(authData);
      $location.path('/');
    }, function(error){
      $scope.error = error.toString();
    });
  };

  $scope.register = function(loginObj) {

    var loginObj = {
      email: $scope.user.email,
      password: $scope.user.password
    };

    Auth.register(loginObj).then(function() {
      console.log('user created successfully');
      return Auth.login(loginObj).then(function() {
        console.log('automatically logged in after registering');
      });
    }, function(error) {
      $scope.error = error.toString();
    });
  };
}]);
