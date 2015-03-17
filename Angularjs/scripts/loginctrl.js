/**
 * 
 */
angular.module('loginApp')
.controller('LoginController',['$scope', 'loginService', function ($scope, loginService) {
	$scope.loginValid = 'false';
	$scope.credentials =  { username:"", password:""};
	
	$scope.login = function login(){
		$scope.loginValid = loginService.validate($scope.credentials);
	}
	
	$scope.logout = function logout(){
		$scope.loginValid = 'false';
	}
	
}]);