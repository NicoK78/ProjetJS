'use strict';

projetJsApp.controller('mainCtrl', ['$rootScope', function($rootScope){
	if(!angular.isDefined($rootScope.selectedOption))
		$rootScope.selectedOption = 1;
}]);