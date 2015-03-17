angular.module('mapGameApp', ['ngRoute', 'EulaController', 'LoginController', 'HomeController']);

angular.module('mapGameApp').config(['$routeProvider', 'EulaController', 'LoginController', 'HomeController',
  function($routeProvider, EulaController, LoginController, HomeController) {
	$routeProvider.when('/index',
		{redirectTo: '/eula'}).
	when('/eula', {
		templateUrl: 'eula.html',
		controller: 'EulaController'
	}).
	when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	}).
	when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeController'
	}).
	otherwise({redirectTo: '/index'});
}]);