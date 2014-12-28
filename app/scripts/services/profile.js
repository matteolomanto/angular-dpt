/**
 * Created by a545703 on 12/18/14.
 */
'use strict';

app.factory('Profile', function($window, $firebase, FIREBASE_URL, Measurement, $q ) {
  var ref = new Firebase(FIREBASE_URL);

  var Profile = {
    get: function(userId) {
      return $firebase(ref.child('profile').child(userId)).$asObject();
    },
    getMeasurements: function (userId) {
      var defer = $q.defer();

      $firebase(ref.child('user_measurements').child(userId))
        .$asArray()
        .$loaded()
        .then(function(data) {
          var measurements = {};

          for(var i = 0; i<data.length; i++) {
            var value = data[i].$value;
            measurements[value] = Measurement.get(value);
          }
          defer.resolve(measurements);
        });

      return defer.promise;
    }
  };

  return Profile;
});
