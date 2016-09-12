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

	.controller('VolumenDownCtrl', function ($scope, $location) {
		$scope.class = "animated fadeInLeft";

		$scope.changeClass = function () {
			$scope.class = "animated fadeOutRight";
			$location.path('/goToPage');
		};
		
		function onVolumeDown() {
			document.getElementById("volumeDownButton").click();
		};
		
		document.addEventListener("volumedownbutton", onVolumeDown);
	})

	.controller('ShakeCtrl', function ($scope) {
		$scope.classUp = "pepe";
		$scope.classBottom = "pepe";
			
		myShakeEvent = new Shake({
			threshold: 15
		});

		$scope.shakeChangeClass = function() {
			$scope.classUp = "animated fadeOut infinite";
			$scope.classBottom = "animated pulse infinite";
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