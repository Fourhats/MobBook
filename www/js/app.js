// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/home',
		controller: "HomeCtrl",
		templateUrl: 'templates/home.html'
	})
	
	.state('menu', {
		url: '/menu',
		controller: "MenuCtrl",
		templateUrl: 'templates/menu.html'
	})
	
	
	.state('volumenUp', {
		url: '/volumenUp',
		controller: "VolumenUpCtrl",
		templateUrl: 'templates/volumenUp.html'
	})
	
	.state('volumenDown', {
		url: '/volumenDown',
		controller: "VolumenDownCtrl",
		templateUrl: 'templates/volumenDown.html'
	})
	
	
	.state('shake', {
		url: '/shake',
		controller: "ShakeCtrl",
		templateUrl: 'templates/shake.html'
	})
	
	
	.state('microphono', {
		url: '/microphono',
		controller: "MicrophonoCtrl",
		templateUrl: 'templates/microphono.html'
	})

		.state('goToPage', {
		url: '/goToPage',
		controller: "GotopageCtrl",
		templateUrl: 'templates/goToPage.html'
	})

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
