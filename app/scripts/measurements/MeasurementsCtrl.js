(function() {
  'use strict';
  angular.module('app.measurements.ctrls', ['highcharts-ng']).controller('MeasurementsCtrl', [
    '$scope', function($scope) {


      return $scope.chartPoundsOfFat = {

        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 1,//null,
          plotShadow: false
        },
        title: {
          text: 'Fat vs. Muscle'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          type: 'pie',
          data: [
            ['Fat', 24.5],
            ['Muscle', 15.5],
            ['Water', 60]
          ]
        }]

      };


    }
  ]);

}).call(this);
