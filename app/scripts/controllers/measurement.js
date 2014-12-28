/**
 * Created by a545703 on 12/18/14.
 */
'use strict';

app.controller('MeasurementController', function ($scope, Measurement) {
  $scope.measurements = [{
    "FirstName": "John",
    "LastName": "Will",
    "Date": "7/4/2005",
    "BF": "18"
  },
  {
    "FirstName": "Callie",
    "LastName": "Durbrow",
    "Date": "3/2/2014",
    "BF": "27.6",
    "WA": "14.3",
    "TR": "11.8",
    "HI": "9.3"
  },
  {
    "FirstName": "Emily",
    "LastName": "Boynton",
    "Date": "9/4/2014",
    "BF": "22.7",
    "WA": "17.5",
    "TR": "8.3",
    "HI": "1.9"
  },
  {
    "FirstName": "John ",
    "LastName": "Park",
    "Date": "5/12/2014",
    "BF": "19.9",
    "TH": "7.8",
    "CH": "11",
    "WA": "14.7"
  },
  {
    "FirstName": "Sandra",
    "LastName": "Brown",
    "Date": "10/21/2013",
    "BF": "33.4",
    "WA": "29.1",
    "TR": "10.6",
    "HI": "15.2"
  },
  {
    "FirstName": "Veronica",
    "LastName": "Penella",
    "Date": "4/10/2014",
    "BF": "35.3",
    "WA": "33.9",
    "TR": "13.3",
    "HI": "16.2"
  }];


  $scope.delete = function(measurement) {
    var index = $scope.measurements.indexOf(measurement);
    $scope.measurements.splice(index, 1);
  };

  $scope.create = function() {
    $scope.measurements.push($scope.newMeasurement);
  };

  $scope.edit = function(measurement) {
    $scope.activeMeasurement = measurement;
  };

  $scope.update = function(measurement) {
    $scope.activeMeasurement = null;
  };

});
