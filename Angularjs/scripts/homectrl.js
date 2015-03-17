angular.module('mapGameApp')
.controller('HomeController',['$scope', 'loginService', function ($scope, loginService) {

	$scope.logout = function logout(){
		loginService.logout();
	}
}]);