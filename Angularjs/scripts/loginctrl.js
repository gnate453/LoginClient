
angular.module('mapGameApp')
.controller('LoginController',['$scope', 'sessionService', function ($scope, sessionService) {
	$scope.login = function login(){
		sessionService.login();
	}
}]);