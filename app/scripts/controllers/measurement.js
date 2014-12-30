/**
 * Created by a545703 on 12/18/14.
 */
'use strict';

app.controller('MeasurementController', function ($scope, Measurement, Auth) {
  $scope.measurements = Measurement.all;

  $scope.create = function() {
    $scope.newMeasurement.creatorUID = Auth.user.uid;
    $scope.newMeasurement.creator = Auth.user.profile.firstName + ' ' + Auth.user.profile.lastName;

    Measurement.create($scope.newMeasurement).then(function(){
      $scope.newMeasurement = {FirstName: "", LastName: "", BF: ""};
    });

  };

  $scope.delete = function(measurement) {
    var index = $scope.measurements.indexOf(measurement);
    $scope.measurements.splice(index, 1);
  };

});
