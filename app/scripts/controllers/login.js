'use strict';

/**
 * @ngdoc function
 * @name durbrowPerformanceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durbrowPerformanceAngularApp
 */
/*
app.controller('LoginCtrl',
  function ($scope, $firebase) {


    var sync = Auth;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.page = 'Login Page';

    // replace node with new data.
    sync.$set({foo: 'bazz'});

    sync.$push({
      hello: 'world'
    })
    .then(function(newChildRef) {
      console.log("added record with id: " + newChildRef.key());
    });

    sync.$remove('foo');

    var changedData = {foo: 'bar', bar: {hello: 'world'}, baz: null};
    sync.$update(changedData);


  });
*/




// and use it in our controller
app.controller("LoginCtrl", ["$scope", "Auth", function($scope, Auth) {
  $scope.auth = Auth;
  $scope.user = $scope.auth.$getAuth();
}]);

