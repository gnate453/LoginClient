/**
 * 
 */
angular.module('mapGameApp')
.factory('sessionService', ['$scope', '$location', function ($location) {
	$scope.credentials =  { username:"", password:""};
	
	$scope.login = function () {
		credentials.password="";
		//TODO: fetch entry from login table, compare provided password
		//if true Reroute to home, else error message.
		$location.path('/home');
		logout = 'false';
		return 'true';
	};
	
	$scope.logout = function () {
		$location.path('/login');
		login = 'false'; 
		return 'true';
	};
	
	return{ login: login,
			logout: logout};
}]);