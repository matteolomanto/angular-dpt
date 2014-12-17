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

    // call login method on Auth service and then redirect
    Auth.login($scope.user).then(function(authData){
      console.log("Logged in as:", authData.uid);
      $location.path('/');
    }, function(error){
      $scope.error = error.toString();
    });
  };

  $scope.register = function() {

    Auth.register($scope.user).then(function() {
      // login here
    }).then(function(authData) {
      console.log(authData);
    }).catch(function(error) {
      $scope.error = error.toString();
      console.log(error);
    });
  };

}]);


//

//$scope.authObj.$createUser("my@email.com", "mypassword").then(function() {
//  console.log("User created successfully!");
//
//}).then(function(authData) {
//  console.log("Logged in as:", authData.uid);
//}).catch(function(error) {
//  console.error("Error: ", error);
//});
