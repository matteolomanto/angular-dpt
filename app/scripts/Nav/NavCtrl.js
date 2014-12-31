
'use strict';
angular.module('app.nav.ctrls', []).controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {

  $scope.logout = Auth.logout;

}]);


