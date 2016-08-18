angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope) {
})

.controller('VolumenUpCtrl', function($scope) {
	$scope.page = "volumenUp";
    
	document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
	
	function onVolumeUpKeyDown() {
		if($scope.page && $scope.page == "volumenUp") {
			alert("subio volumen");
		}
    }
})

.controller('VolumenDownCtrl', function($scope) {
	$scope.page = "volumenDown";
	
	document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
	
	function onVolumeDownKeyDown() {
		if($scope.page && $scope.page == "volumenDown") {
			alert("bajo volumen");
		}
    }
})

.controller('ShakeCtrl', function($scope) {
	$scope.page = "shake";
	
	document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        startShake();
    }
	function startShake() {
		var myShakeEvent = new Shake({
			threshold: 15
		});

		myShakeEvent.start();

		window.addEventListener('shake', shakeEventDidOccur, false);

		function shakeEventDidOccur () {
			alert('Agitaste!');
		}
	}
})

.controller('MicrophonoCtrl', function($scope) {
});