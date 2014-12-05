/**
 * Created by dloure on 12/5/14.
 */
'use strict';

/**
 * @ngdoc function
 * @name durbrowPerformanceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durbrowPerformanceAngularApp
 */
app.controller('LoginCtrl',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.page = 'Login Page';
  });
