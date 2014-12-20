/**
 * Created by a545703 on 12/18/14.
 */
'use strict';

app.factory('Profile', function($window, $firebase, Measurement, $q ) {
  var ref = new Firebase('https://durbrow-performance.firebaseio.com');

  var Profile = {
    get: function(userId) {
      return $firebase(ref.child('profile').child(userId)).$asObject();
    }
  };

  return Profile;
});
