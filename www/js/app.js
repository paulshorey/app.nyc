// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionicApp.services' is found in services.js
// 'ionicApp.controllers' is found in controllers.js
angular.module('ionicApp', ['ionic', 'ionicApp.controllers', 'ionicApp.services'])

.run(function ($ionicPlatform, $rootScope, AccountService) {

	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});

	AccountService.currentUser()
		.then(function (user) {
			$rootScope.user = user;
		})
})

//.constant("socialProvider", "facebook")

.constant('$ionicLoadingConfig', {
	template: "<ion-spinner></ion-spinner>",
	hideOnStateChange: false
})

.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('home', {
			cache: false,
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: "ListController",
			controllerAs: "vm"
		})
		.state('lists', {
			cache: false,
			url: '/',
			templateUrl: 'templates/lists.html',
			controller: "ListController",
			controllerAs: "vm"
		})
		.state('new', {
			cache: false,
			url: '/new',
			templateUrl: 'templates/new.html',
			controller: "ListController",
			controllerAs: "vm"
		})
		.state('edit', {
			cache: false,
			url: '/list/:id',
			templateUrl: 'templates/edit.html',
			controller: "ListController",
			controllerAs: "vm"
		})



	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');

});