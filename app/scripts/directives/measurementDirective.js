/**
 * Created by a545703 on 1/1/15.
 */

app.directive('showMeasurements', function() {
  return {
    scope: {
      measurements: '='
    },
    templateUrl: 'scripts/directives/measurements.html'
  }
});
