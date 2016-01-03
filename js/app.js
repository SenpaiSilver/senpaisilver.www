(function() {
	'use strict';
	angular
		.module('app', [
			'app.directives',
			'app.routes',
			'app.menu',
			'app.showcase',
		])
		.run(function($rootScope) {
			initWF();
		});
})();