let pLat = document.createElement('p');
pLat.id='iss-lat';
document.body.append(pLat)

let pLon = document.createElement('p');
pLon.id='iss-lon';
document.body.append(pLon)

let map = L.map('map').setView([51.505, -0.09], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let issMarker;

function positionIss() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then((httpResponse) => httpResponse.json())
        .then((data) => {

            const longitude = data.iss_position.longitude;
            const latitude = data.iss_position.latitude;

            pLat.innerText = 'Latitude : ' + latitude;
            pLon.innerText = 'Longitude : ' + longitude;

            const position = [latitude, longitude];
            if (issMarker){
                issMarker.setLatLng(position);
            }
            else {
                issMarker = L.marker(position, {
                    icon: L.icon({
                        iconUrl: 'image/iss.png',
                        iconSize: [32,32],
                        iconAnchor: [16,32],
                        popupAnchor: [0, -32]
                    })
                }).addTo(map);
            }

            map.setView([latitude, longitude], 2)

        })
}
positionIss();
setInterval(positionIss, 1500);

