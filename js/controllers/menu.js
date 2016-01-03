(function() {
	'use strict';
	angular
		.module('app.menu', [])
		.controller('menuController', function ($scope) {
			$scope.menuElements = [
				//{url: '#/Home', text: 'Home', icon: 'home'},
				{url: 'http://blog.senpaisilver.com', text: 'Blog', icon: 'blog'},
				{url: 'https://github.com/SenpaiSilver/', text: 'GitHub', icon: 'github'},
				{url: 'http://steamcommunity.com/id/senpaisilver/', text: 'Steam', icon: 'steam'},
				{url: 'https://plus.google.com/+SenpaiSilver/about', text: 'Google+', icon: 'googlep'},
				{url: 'https://twitter.com/SenpaiSilver', text: 'Twitter', icon: 'twitter'},
				{url: 'https://youtube.com/SenpaiSilver"', text: 'YouTube', icon: 'youtube'},
				{url: 'https://secure.eveonline.com/trial/?invc=503fc3ad-0989-4589-a826-e4b786948803', text: 'EVE Online', icon: 'eveonline'}
			];
			$scope.toggleElements = [
				//{toggle: 'toggleCrosses', text: 'Tumbling down', icon: 'nerv'}
			];
			
			$scope.toggleCrosses = function() {
				toggleCrosses();
			};
			$scope.$on('toggleCrosses', function() {
				console.log("ENDING THE WORLD NOW");
				toggleCrosses();
			});
		});
})();