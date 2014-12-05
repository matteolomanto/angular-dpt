'use strict';

/**
 * @ngdoc overview
 * @name durbrowPerformanceAngularApp
 * @description
 * # durbrowPerformanceAngularApp
 *
 * Main module of the application.
 */
angular
  .module('durbrowPerformanceAngularApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
