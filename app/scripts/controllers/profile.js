/**
 * Created by dloure on 12/19/14.
 */
'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  console.log($scope.profile);
  Profile.getMeasurements(uid).then(function(measurements){
    $scope.measurements = measurements;
  });

  $scope.saveProfile = function(){

    console.log('first name: ' + $scope.user.firstName);
    console.log('last name: ' + $scope.user.lastName);
  };
});
