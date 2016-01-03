(function() {
	'use strict';
	angular.module('app.routes', [
		'ngRoute'
	])
	.config(['$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.caseInsensitiveMatci = true;
			$routeProvider
			.when('/Home', {
					templateUrl: './partials/showcase.html',
					controller: 'showcaseController'
			})
			.when('/TumblingDown', {
				redirectTo: '/Home'
			})
			.otherwise({
				redirectTo: '/Home'
			});
			//$locationProvider.html5Mode(true);
		}]);
})();