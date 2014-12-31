'use strict';

angular.module('app.measurement', []).factory('Measurement', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var measurements = $firebase(ref.child('measurements')).$asArray(); // downloads measurements

  var Measurement = {
    all: measurements,
    create: function(measurement) {

      // add measurement to the measurement 'table' (child) in
      // firebase.
      return measurements.$add(measurement)

        // then add it to user_measurements, so we can
        // easily query which measurements belong to a specific user
        .then(function(measurementRef){

          // 1. create 'user_measurements'
          $firebase(ref.child('user_measurements')

            // 2. create a child with the user's simpleloginid
            .child(measurement.creatorUID))

            // 3. add the key here that corresponds to the most in the main
            // measurements table.
            .$push(measurementRef.key());

        });
    },
    get: function (measurementId) {
      return $firebase(ref.child('measurements').child(measurementId)).$asObject();
    },
    delete: function (measurement) {
      return measurements.$remove(measurement);
    },
    update: function (measurement) {
      return measurements.$save(measurement);
      // edit data here
    }
  };

  return Measurement;
});

// $add
//Creates a new record in Firebase and adds the record to our
//synchronized array.This method returns a promise which is resolved
//after data has been saved to the server. The promise resolves to the
//Firebase reference for the newly added record, providing easy access
//to its key.

//var list = $firebase(ref).$asArray();
//list.$add({ foo: "bar" }).then(function(ref) {
//  var id = ref.key();
//  console.log("added record with id " + id);
//  list.$indexFor(id); // returns location in the array
//});
