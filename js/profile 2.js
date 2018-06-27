var perfilHtml = "";
var historialHtml = "";
var direccionesHtml = "";
var notificacionesHtml = "";

////////////////////////////////////// <-- Menu
function mostrarPerfil(){
	ocultar();
	elemento = document.getElementById('content_Section_Profile');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	elemento2 = document.getElementById('perfilToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
}
function mostrarHistorial(){
	ocultar();
	elemento = document.getElementById('content_Section_Historial');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	elemento2 = document.getElementById('historialToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
}
function mostrarDireccion(){
	ocultar();
	elemento = document.getElementById('content_Section_Direccion');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	elemento2 = document.getElementById('direccionesToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
}
function mostrarNotificacion(){
	ocultar();
	elemento = document.getElementById('content_Section_Notificaciones');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	elemento2 = document.getElementById('notificacionesToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
}
function ocultar(){
	let elementos = document.querySelectorAll('.contentOfSectionProfile');
	for (let elemento of elementos)
	{	
		elemento.classList.remove("mostrar");
		elemento.classList.add("ocultar");
	}
}
////////////////////////////////////// Menu -->
////////////////////////////////////// <-- Direccion

/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(-2.1944648,-79.9679552),
    mapTypeId: 'roadmap',
    disableDefaultUI: true
  });
  var icons = {
    parking: {
      icon:'/static/images/Contact1-Recovered.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-2.1944648,-79.9679552),
      type: 'parking'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      map: map
    });

    var contentString = '<div id="content-gg">'+
      '<h3 id="firstHeading" class="firstHeading"> Puerto Azul</h3>'+
      '<p>Mz.A4 - V. 20</p>'+
      '</div>'
      ;

  var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      });
      marker.addListener('mouseover', function() {
        infowindow.open(map, marker);
      });
  });

}
*/

var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -2.1944648, lng: -79.9679552}, zoom: 15
        });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
    	    var pos = {
	    	    lat: position.coords.latitude,
        		lng: position.coords.longitude
    		};

    		infoWindow.setPosition(pos);
    		infoWindow.setContent('Location found.');
    		infoWindow.open(map);
    		map.setCenter(pos);
  		}, function() {
    	        handleLocationError(true, infoWindow, map.getCenter());
	          });
    } else {
    // Browser doesn't support Geolocation
    	handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                               'Error: The Geolocation service failed.' :
                               'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function iniciar(){
	var boton=document.getElementById('obtener');
	boton.addEventListener('click', obtener, false);
}

function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);
}

function mostrar(posicion){
	var ubicacion=document.getElementById('localizacion');
	var datos='';
	datos+='Latitud: '+posicion.coords.latitude+'<br>';
	datos+='Longitud: '+posicion.coords.longitude+'<br>';
	datos+='Exactitud: '+posicion.coords.accuracy+' metros.<br>';
	ubicacion.innerHTML=datos;
}

function gestionarErrores(error){
	alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+'a internet y habilite la opción permitir compartir ubicación física');
}

window.addEventListener('load', iniciar, false);

//window.addEventListener("resize", function(event) {
//    console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
//})
////////////////////////////////////// Direccion -->
(function(){

	ocultar();
	mostrarPerfil();
	$("#perfil").on("click",mostrarPerfil);
	$("#historial").on("click",mostrarHistorial);
	$("#direcciones").on("click",mostrarDireccion);
	$("#notificaciones").on("click",mostrarNotificacion);


})();