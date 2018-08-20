const module = angular.module("myApp", [ "ui.router" ]);

module.config(function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$stateProvider
	.state("home", {
		url : "/home",
		templateUrl : "src/component/home/home.html",
		controller : "home"
	})
	.state("in-progress", {
		url : "/in-progress",
		templateUrl : "src/component/in-progress/in-progress.html",
		controller : "inProgress"
	})
	$urlRouterProvider.otherwise("/home");
});