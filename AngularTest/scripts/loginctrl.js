/**
 * 
 */
angular.module('loginApp')
.controller('LoginController',['$scope', 'loginService', function ($scope, loginService) {
	$scope.loginValid = 'false';
	$scope.username = "";
	$scope.password = "";
	
	$scope.submitLogin = function submitLogin(){
		$scope.loginValid = loginService.validate($scope.username, $scope.password);
		$scope.password = "";
	}
	
	$scope.logout = function logout(){
		$scope.loginValid = 'false';
		$scope.username = "";
		$scope.password = "";
	}
	
}]);