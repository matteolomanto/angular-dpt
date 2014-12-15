'use strict';
/**
 * Created by a545703 on 12/10/14.
 */
app.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
  var ref = new Firebase('https://durbrow-performance.firebaseio.com');
  var authObject = $firebaseAuth(ref);


  var Auth = {
    register:function () {

    },

    login: function (loginObj) {
      return authObject.$authWithPassword({
        email: loginObj.email,
        password: loginObj.password
      });
    },

    resolveUser: function() {
      return authObject.$getAuth();
    }
  };

  return Auth;

}]);
