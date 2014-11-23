'use strict';

/**
 * @ngdoc function
 * @name projetJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetJsApp
 */
angular.module('projetJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
