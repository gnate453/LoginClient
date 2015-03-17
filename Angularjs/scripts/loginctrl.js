
angular.module('mapGameApp')
.controller('LoginController',['$scope', 'loginService', function ($scope, loginService) {
	$scope.credentials =  { username:"", password:""};
	
	$scope.login = function login(){
		loginService.login($scope.credentials);
	}
}]);