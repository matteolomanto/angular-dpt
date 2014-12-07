'use strict';

/**
 * @ngdoc overview
 * @name durbrowPerformanceAngularApp
 * @description
 * # durbrowPerformanceAngularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('dptApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html'
      })
      .when('/measurements', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
