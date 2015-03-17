/**
 * 
 */
angular.module('loginApp')
.factory('loginService', [function () {

	
	var validate = function (credentials) {
		
		credentials.password="";
		return 'true';
		
	};
	
	return{ validate: validate };
}]);