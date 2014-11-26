'use strict';

/**
 * @ngdoc overview
 * @name projetJsApp
 * @description
 * # projetJsApp
 *
 * Main module of the application.
 */
  var projetJsApp = angular.module('projetJsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngDialog',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/main.html',
        controller: 'homeCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'gameCtrl'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'creditsCtrl'
      })
      .when('/option', {
        templateUrl: 'views/option.html',
        controller: 'optionCtrl'
      })
      .otherwise({
        templateUrl: "/404.html"
     });
}]);
