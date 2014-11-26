'use strict';

projetJsApp.controller('gameCtrl', ['$scope', '$rootScope',  function ($scope, $rootScope) {
	$scope.initClock = new initClock();
	$scope.initClock.start($rootScope.selectedOption);
	$scope.halfDay = $scope.clock.halfDay;

	$scope.hour = 0;
	$scope.min = 0;

	$scope.upHour = function() {
		if($scope.hour == 23){
			$scope.hour = 0;	
		} else {
			$scope.hour++;
		}
	}

	$scope.downHour = function() {
		if($scope.hour == 0){
			$scope.hour = 23;
		} else {
			$scope.hour--;
		}
	}

	$scope.upMinute = function() {
		if($scope.min == 55){
			$scope.min = 0;
		} else {
			$scope.min += 5;
		}
	}

	$scope.downMinute = function() {
		if($scope.min == 0){
			$scope.min = 55;
		} else {
			$scope.min -= 5;
		}
	}

	$scope.verify = function() {
		if($scope.hour == $scope.initclock.hour && $scope.min == $scope.initClock.min)
			$scope.answer = true;
		else
			$scope.answer = false;
	}

	$scope.changeClock = function() {
		$scope.initClock.start($rootScope.selectedOption);
	}
}]);