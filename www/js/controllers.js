angular.module('starter.controllers', [])

	.controller('HomeCtrl', function ($scope) {
	})

	.controller('MenuCtrl', function ($scope) {
	})

	.controller('VolumenUpCtrl', function ($scope) {
		//document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
		//document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
		//window.removeEventListener("shake", onShake);
		//document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
	})

	.controller('VolumenDownCtrl', function ($scope, $location, $rootScope) {
		$scope.class = "animated fadeInLeft";

		$scope.changeClass = function () {
			$scope.class = "animated fadeOutRight";
				
			setTimeout(function(){ 
				$rootScope.$apply(function() {
					$location.path('/goToPage'); 
				});
			}, 2000);
		};
		
		function goToPage() {
			
		}
		
		function onVolumeDown() {
			document.getElementById("volumeDownButton").click();
		};
		
		document.addEventListener("volumedownbutton", onVolumeDown);
	})

	.controller('ShakeCtrl', function ($scope, $location, $rootScope) {
		$scope.classUp = "pepe";
		$scope.classBottom = "pepe";
			
		myShakeEvent = new Shake({
			threshold: 15
		});

		$scope.shakeChangeClass = function() {
			$scope.classUp = "animated fadeOut infinite";
			$scope.classBottom = "animated pulse infinite";
			setTimeout(function(){ 
				$rootScope.$apply(function() {
					$location.path('/goToPage'); 
				});
			}, 5000);
		};

		function onShake() {
			document.getElementById("shakeButton").click();
		};
		
		// start listening to device motion
		myShakeEvent.start();

		// register a shake event
		window.addEventListener('shake', onShake, false);
	})

	.controller('MicrophonoCtrl', function ($scope) {

		$scope.changeClass = function () {
			$scope.classUp = "animated bounceOut";
			setTimeout(function () {
				$scope.classUp = "";
				$scope.classUp = "animated bounceIn";
			}, 2000);

		};

	})

	.controller('GotopageCtrl', function ($scope) {

	});

var myShakeEvent;