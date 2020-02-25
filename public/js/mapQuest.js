function initMap() {
	L.mapquest.key = 'Yc7G0sye6KleB4hliFl4qV0iPxuCY5pa';

	// 'map' refers to a <div> element with the ID map
	var location = [32.8778504,-117.2368428];

	L.mapquest.map('map', {
		center: location,
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	L.marker(location).addTo(map);
}