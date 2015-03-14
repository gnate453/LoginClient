/**
 * 
 */
angular.module('loginApp')
.factory('loginService', [function () {

	
	var validate = function (username, password) {
		return 'true';
	};
	
	return{ validate: validate };
}]);