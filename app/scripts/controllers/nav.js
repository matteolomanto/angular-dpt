/**
 * Created by dlo on 12/7/14.
 */
'use strict';

app.controller('NavCtrl', ['$scope', 'Auth', function ($scope, Auth) {
  // TODO implement auth
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;
}]);
