/**
 * Created by a545703 on 12/18/14.
 */
'use strict';

app.controller('MeasurementController', function ($scope, Measurement, Auth) {
  $scope.measurements = Measurement.all;

  $scope.create = function() {
    console.log($scope.newMeasurement);

    // TODO: use Angular-Moment: https://github.com/urish/angular-moment/issues
    var now =  new Date;
    $scope.newMeasurement.DateEntered = ($scope.newMeasurement.Date) ? $scope.newMeasurement.Date.getTime() : now.getTime();
    console.log($scope.newMeasurement);


    $scope.newMeasurement.FirstName = $scope.newMeasurement.FirstName || Auth.user.profile.firstName;
    $scope.newMeasurement.LastName = $scope.newMeasurement.LastName || Auth.user.profile.lastName;
    $scope.newMeasurement.creatorUID = Auth.user.uid;

    Measurement.create($scope.newMeasurement).then(function(){
      $scope.newMeasurement = {FirstName: "", LastName: "", BF: ""};
    });

  };

  $scope.delete = function(measurement) {
    var index = $scope.measurements.indexOf(measurement);
    $scope.measurements.splice(index, 1);
  };

});
