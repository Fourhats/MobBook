angular.module('starter.controllers', [])

	.controller('HomeCtrl', function ($scope) {
	})

	.controller('MenuCtrl', function ($scope) {
	})

	.controller('VolumenUpCtrl', function ($scope) {
		document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
		document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
		window.removeEventListener("shake", onShake);
		document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
	})

	.controller('VolumenDownCtrl', function ($scope, $location) {
		document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
		document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
		window.removeEventListener("shake", onShake);
		document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

		$scope.class = "animated fadeInLeft";

		$scope.changeClass = function () {
			$scope.class = "animated fadeOutRight";
			$location.path('/goToPage')

		};
	})

	.controller('ShakeCtrl', function ($scope) {
		document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
		document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
		window.removeEventListener("shake", onShake);

		myShakeEvent = new Shake({
			threshold: 15
		});


		//$scope.class = "shake";

		$scope.changeClass = function () {
			$scope.classUp = "animated fadeOut infinite";
			$scope.classBottom = "animated pulse infinite";
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
function onVolumeUpKeyDown() {
	alert("subio volumen");
}
function onVolumeDownKeyDown() {
	alert("bajo volumen");
}
function onShake() {
	alert('Agitaste!');
	//$scope.class = "animated swing infinite";
}