(function() {
  'use strict';
  angular.module('app.chart.ctrls', ['angular-c3']).controller('chartCtrl', [
    '$scope', function($scope) {
      return $scope.chartBodyFatGauge = {
        data: {
          columns: [
            ['body fat', 21.4]
          ],
          type: 'gauge',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
            values: [13, 20, 24, 31]
          }
        },
        size: {
          height: 180
        }
      };
    }
  ]);

}).call(this);
