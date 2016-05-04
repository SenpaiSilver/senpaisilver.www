(function() {
	'use strict';
	angular
	.module('app', [
		'app.routes',
		'app.menu',
		'app.showcase',
	])
	.config(['$compileProvider', function ($compileProvider) {
		//$compileProvider.debugInfoEnabled(true);
		$compileProvider.debugInfoEnabled(false); //Production
	}])
	.run(function($rootScope) {
	});
})();