/**
 * Created by a545703 on 12/8/14.
 */
'use strict';

app.controller("RegisterCtrl", ["$scope", "Auth", "$location", function($scope, Auth, $location) {

  $scope.register = function() {

    Auth.$createUser(email, password).then(function(){
      console.log('user created successfully');

      // now that we've created a user, let's login with the username and password supplied
      return Auth.$authWithPassword({
        email: $scope.user.email,
        password: $scope.user.password
      });

    }).then(function(authData) {

      console.log("logged in as: ", authData.uid);
      console.log('Redirecting to measurements page');
      $location.path('/measurements');
    }).catch(function(error){
      console.error("Error: ", error);
    });
  };


}]);
