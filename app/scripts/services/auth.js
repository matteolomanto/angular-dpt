'use strict';
/**
 * Created by a545703 on 12/10/14.
 */
app.factory('Auth', ['$firebase', '$firebaseAuth', 'FIREBASE_URL', '$rootScope', function($firebase, $firebaseAuth, FIREBASE_URL, $rootScope){
  var ref = new Firebase(FIREBASE_URL);
  var authObject = $firebaseAuth(ref);


  var Auth = {
    register: function (user) {
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
      var profile = {
        userEmail: Auth.user.password.email
      };

      var profileRef = $firebase(ref.child('profile'));
      console.log(user);
      return profileRef.$set(Auth.user.uid, profile);
    },
    user: {}
  };

  authObject.$onAuth(function(authData) {
    console.log('services/auth: $onAuth');

    // user is logged in -- let's copy info to the user object
    if (authData) {
      console.log('authData available: user is logged in');
      angular.copy(authData, Auth.user);
      Auth.user.profile = $firebase(ref.child('profile').child(Auth.user.uid)).$asObject();
      console.log(Auth.user);
    } else {
    // user is logged out -- destroy dession.
      if(Auth.user && Auth.user.profile) {
        Auth.user.profile.$destroy();
      }
      console.log('authData not available: user is logged out');
      angular.copy({}, Auth.user);

    }

  });

  return Auth;

}]);
