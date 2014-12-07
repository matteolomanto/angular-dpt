/**
 * Created by dlo on 12/7/14.
 */
'use strict';

app.controller('NavCtrl', function ($scope) {
  // TODO implement auth
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;
});
