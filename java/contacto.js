let options={
  enableHighAccuracy:true,
  timeout:50000,
  maximumage:0
}

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
      success,
      error,
      options
  )
}else{alert("los servicios de geolocalización no estan disponibles")}
function success (position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let map = L.map('map',{
      center:[latitude,longitude],
      zoom: 14
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    let control = L.Routing.control({
      waypoints:[
          L.latLng(latitude, longitude),
          L.latLng(37.893381,-4.780594)
      ],
      language:'es',
    }).addTo(map);
}

function error(){

}