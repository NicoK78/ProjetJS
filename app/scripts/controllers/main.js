'use strict';

/**
 * @ngdoc function
 * @name projetJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetJsApp
 */
angular.module('projetJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
  });
