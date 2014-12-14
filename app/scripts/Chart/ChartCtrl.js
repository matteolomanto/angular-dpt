(function() {
  'use strict';
  angular.module('app.chart.ctrls', []).controller('chartCtrl', [
    '$scope', function($scope) {
      return $scope.gaugeChart3 = {
        data: {
          maxValue: 3000,
          animationSpeed: 50,
          val: 1100
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#FF7857',
          colorStop: '#FF7857',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, '#E87352'], [1.0, '#E87352']]
        }
      };
    }
  ]);

}).call(this);
