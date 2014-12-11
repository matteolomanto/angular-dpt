'use strict';
/**
 * Created by a545703 on 12/10/14.
 */
app.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
  var ref = new Firebase('https://durbrow-performance.firebaseio.com');
  return $firebaseAuth(ref);
}]);
