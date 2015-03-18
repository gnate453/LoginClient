angular.module('mapGameApp')
.controller('HomeController',['$scope', 'sessionService', function ($scope, sessionService) {
	$scope.logout = function logout(){
		sessionService.logout();
	}
}]);