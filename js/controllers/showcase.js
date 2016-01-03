(function() {
	'use strict';
	angular
		.module('app.showcase', [])
		.controller('showcaseController', function ($scope) {
			$scope.showcaseElements = [
				{url: 'https://github.com/SenpaiSilver/ArtifactHunter', text: 'ArtifactHunter', icon: 'artifacthunter'},
				{url: 'https://github.com/SenpaiSilver/FOVComparator', text: 'FOVComparator', icon: 'fovcomparator'}
			];
		});
})();