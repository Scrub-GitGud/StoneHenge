// ----------------------------------------------- MAP
var map;
function initMap() {

  // 51°10'44.3"N 1°49'34.4"W
  const stonehenge = { lat: 51.235900, lng: -1.792710 }

  map = new google.maps.Map(document.getElementById("map"), {
    center: stonehenge,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: stonehenge,
    map: map,
    title: 'Stonehenge'
  });
}


// ------------------------------------------------- Scrolling Opacity Change of Navbar
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.8
  }
  else{
    document.querySelector('#navbar').style.opacity = 1
  }
})