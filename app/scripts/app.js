(function() {
  'use strict';
  angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'mgo-angular-wizard',
    'textAngular',
    'ui.tree',
    'ngMap',
    'ngTagsInput',
    'app.ui.ctrls',
    'app.ui.directives',
    'app.ui.services',
    'app.controllers',
    'app.directives',
    'app.form.validation',
    'app.ui.form.ctrls',
    'app.ui.form.directives',
    'app.task',
    'app.measurements.ctrls',
    'app.exercises.ctrls',
    'app.auth',
    'app.auth.ctrls',
    'app.nav.ctrls',
    'firebase'
  ])
    .constant('FIREBASE_URL', 'https://durbrow-performance.firebaseio.com/')
    .config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        redirectTo: '/pages/signin'
      }).when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      }).when('/pages/measurements', {
        templateUrl: 'views/pages/measurements.html'
      })

      .when('/pages/signin', {
          templateUrl: 'views/pages/signin.html',
          controller: 'AuthCtrl',
          resolve: {
            user: function(Auth) {
              return Auth.resolveUser();
            }
          }

      })

        .when('/pages/signup', {
        templateUrl: 'views/pages/signup.html'
      }).when('/pages/forgot', {
        templateUrl: 'views/pages/forgot-password.html'
      }).when('/pages/lock-screen', {
        templateUrl: 'views/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: 'views/pages/profile.html'
      }).when('/404', {
        templateUrl: 'views/pages/404.html'
      }).when('/pages/500', {
        templateUrl: 'views/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: 'views/pages/blank.html'
      }).when('/goals', {
        templateUrl: 'views/goals/goals.html'
      }).otherwise({
        redirectTo: '/404'
      });
    }
  ]);

}).call(this);
