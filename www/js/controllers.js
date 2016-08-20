angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope) {
})

.controller('VolumenUpCtrl', function($scope) {
	document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
	document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
	window.removeEventListener("shake", onShake);
	document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
})

.controller('VolumenDownCtrl', function($scope) {
	document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
	document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
	window.removeEventListener("shake", onShake);
	document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
})

.controller('ShakeCtrl', function($scope) {
	document.removeEventListener("volumeupbutton", onVolumeUpKeyDown);
	document.removeEventListener("volumedownbutton", onVolumeDownKeyDown);
	window.removeEventListener("shake", onShake);
	
	myShakeEvent = new Shake({
		threshold: 15
	});

	// start listening to device motion
	myShakeEvent.start();

	// register a shake event
	window.addEventListener('shake', onShake, false);
})

.controller('MicrophonoCtrl', function($scope) {
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
}