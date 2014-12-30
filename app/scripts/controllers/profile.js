/**
 * Created by dloure on 12/19/14.
 */
'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, Profile) {
 // userID defined in app.js
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getMeasurements(uid).then(function(measurements){
    $scope.measurements = measurements;



  });

});
