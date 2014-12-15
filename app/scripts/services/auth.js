'use strict';
/**
 * Created by a545703 on 12/10/14.
 */
app.factory('Auth', ['$firebaseAuth', '$rootScope', function($firebaseAuth, $rootScope){
  var ref = new Firebase('https://durbrow-performance.firebaseio.com');
  var authObject = $firebaseAuth(ref);


  var Auth = {
    register: function (loginObj) {
     return authObject.$createUser(loginObj.email, loginObj.password);
    },

    login: function (loginObj) {
      return authObject.$authWithPassword({
        email: loginObj.email,
        password: loginObj.password
      });
    },

    resolveUser: function() {
      return authObject.$getAuth();
    },

    createProfile: function(user) {
      var profile = {
        userEmail: user.email,
        md5_hash: user.md5_hash
      };

      var profileRef = $firebase(ref.child('profile'));
      return profileRef.$set(user.uid, profile);
    },
    user: {}
  };

  authObject.$onAuth(function(authData) {
    console.log('services/auth: $onAuth');
    console.log(authData);
    // user is logged in -- let's copy info to the user object
    if (authData) {
      // copy user into Auth.user
      console.log('there\'s authData available: user is logged in');
      angular.copy(authData, Auth.user);
      console.dir(Auth.user);

    } else {
      console.log('authData not available: user is logged out');
      angular.copy({}, Auth.user);
    }

  });

  return Auth;

}]);
