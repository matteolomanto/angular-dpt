'use strict';

/**
 * @ngdoc function
 * @name durbrowPerformanceAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the durbrowPerformanceAngularApp
 */

app.controller("LoginCtrl", ["$scope", "Auth", function($scope, Auth) {
  $scope.auth = Auth;
  $scope.user = $scope.auth.$getAuth();
}]);
