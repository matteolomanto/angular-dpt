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
    'ngTouch',
    'angular-c3',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html'
      })
      .when('/measurements', {
        templateUrl: '../views/measurements.html',
        controller: 'MeasurementsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
