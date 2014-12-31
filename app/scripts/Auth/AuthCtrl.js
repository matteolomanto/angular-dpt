/**
 * Created by dloure on 12/14/14.
 */
'use strict';

angular.module('app.auth.ctrls', []).controller("AuthCtrl", ["$scope", "$location", "Auth", "user", function($scope, $location, Auth, user){

  if (user) {
    $location.path('/dashboard');
  }

  $scope.login = function(loginObj) {

    // call login method on Auth service and then redirect
    Auth.login($scope.user).then(function(authData){
      console.log("Logged in as:", authData.uid);
      $location.path('/dashboard');
    }, function(error){
      $scope.error = error.toString();
    });
  };

  $scope.register = function() {

    Auth.register($scope.user).then(function() {
      console.log("User created successfully!");
      return Auth.login($scope.user); // log our user in now

    }).then(function(authData) {
      console.log("Logged in as: " + authData.uid);
      console.log(authData);
      return Auth.createProfile($scope.user); // create a profile w/ our user

    }).then(function() {
      $location.path('/measurements');

    }).catch(function(error) {
      $scope.error = error.toString();
    });
  };

}]);

