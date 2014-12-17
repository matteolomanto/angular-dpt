'use strict';
/**
 * Created by a545703 on 12/10/14.
 */
app.factory('Auth', ['$firebase', '$firebaseAuth', '$rootScope', function($firebase, $firebaseAuth, $rootScope){
  var ref = new Firebase('https://durbrow-performance.firebaseio.com');
  var authObject = $firebaseAuth(ref);


  var Auth = {
    register: function (user) {
      console.log('auth.register - user: ');
      console.log(user);
     return authObject.$createUser(user.email, user.password);
    },

    login: function (user) {
      return authObject.$authWithPassword({
        email: user.email,
        password: user.password
      });
    },

    logout: function() {
      return authObject.$unauth();
    },

    resolveUser: function() {
      return authObject.$getAuth();
    },

    signedIn: function() {
      return !!Auth.user.provider;
    },

    createProfile: function(user) {
      console.log("createProfile");
      console.log(user);
      var profile = {
        userEmail: user.password.email
      };

      var profileRef = $firebase(ref.child('profile'));
      console.log(user);
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

    } else {
      console.log('authData not available: user is logged out');
      angular.copy({}, Auth.user);
    }

  });

  return Auth;

}]);
