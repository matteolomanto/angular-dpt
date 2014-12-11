'use strict';

app.factory('Measurement', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var measurements = $firebase(ref.child('measurements')).$asArray();

  var Measurement = {
    all: measurements,
    create: function(measurement) {
      return measurements.$add(measurement);
    },
    get: function (measurementId) {
      return $firebase(ref.child('measurements').child(measurementId)).$asObject();
    },
    delete: function (measurement) {
      return measurements.$remove(measurement);
    }
  };

  return Measurement;
});
