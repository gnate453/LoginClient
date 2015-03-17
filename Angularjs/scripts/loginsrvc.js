/**
 * 
 */
angular.module('mapGameApp')
.factory('loginService', ['$location', function ($location) {

	
	var login = function (credentials) {
		credentials.password="";
		//TODO: fetch entry from login table, compare provided password
		//if true Reroute to home, else error message.
		$location.path('/home');
		logout = 'false';
		return 'true';
	};
	
	var logout = function () {
		//TODO: fetch entry from login table, compare provided password
		//if true Reroute to home, else error message.
		$location.path('/login');
		login = 'false'; 
		return 'true';
	};
	
	return{ login: login,
			logout: logout};
}]);