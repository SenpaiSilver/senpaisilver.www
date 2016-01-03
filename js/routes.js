(function() {
	'use strict';
	angular.module('app.routes', [
		'ngRoute'
	])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.caseInsensitiveMatci = true;
			$routeProvider
			.when('/Showcase', {
					templateUrl: './partials/showcase.html',
					controller: 'showcaseController'
			})
			.when('/TumblingDown', {
				redirectTo: '/Showcase'
			})
			.otherwise({
				redirectTo: '/Showcase'
			});
			//$locationProvider.html5mode(true);
		}]);
})();