'use strict';

projetJsApp.controller('optionsCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$scope.selectClock = function(numClock) {
		$rootScope.selectedOption = numClock;
		$location.path('#/');
	}
}]);