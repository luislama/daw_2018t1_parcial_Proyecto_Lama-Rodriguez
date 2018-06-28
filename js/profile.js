////////////////////////////////////// <-- Menu
function mostrarPerfil(){
	ocultar();
	let elemento = document.getElementById('content_Section_Profile');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	let elemento2 = document.getElementById('perfilToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
};
function mostrarHistorial(){
	ocultar();
	let elemento = document.getElementById('content_Section_Historial');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	let elemento2 = document.getElementById('historialToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
};
function mostrarDireccion(){
	ocultar();
	let elemento = document.getElementById('content_Section_Direccion');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	let elemento2 = document.getElementById('direccionesToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
};
function mostrarNotificacion(){
	ocultar();
	let elemento = document.getElementById('content_Section_Notificaciones');
	elemento.classList.remove("ocultar");
	elemento.classList.add("mostrar");
	let elemento2 = document.getElementById('notificacionesToggle');
	elemento2.classList.remove("ocultar");
	elemento2.classList.add("mostrar");
};
function ocultar(){
	let elementos = document.querySelectorAll('.contentOfSectionProfile');
	for (let elemento of elementos)
	{	
		elemento.classList.remove("mostrar");
		elemento.classList.add("ocultar");
	};
};
////////////////////////////////////// Menu -->

function editarPerfil(){
  $(".input_Profile").removeAttr('disabled');
  let elemento = document.getElementById("btn_section_profile_guardar");
  elemento.classList.remove("ocultar");
  elemento.classList.add("mostrar");
  let elemento2 = document.getElementById('btn_section_profile_editar');
  elemento2.classList.remove("mostrar");
  elemento2.classList.add("ocultar");
};

function guardarPerfil(){
  $(".input_Profile").attr('disabled','disabled');
  let elemento = document.getElementById("btn_section_profile_guardar");
  elemento.classList.remove("mostrar");
  elemento.classList.add("ocultar");
  let elemento2 = document.getElementById('btn_section_profile_editar');
  elemento2.classList.remove("ocultar");
  elemento2.classList.add("mostrar");
};

////////////////////////////////////// <-- Direccion

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
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                               'Error: The Geolocation service failed.' :
                               'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

function iniciar(){
	var boton=document.getElementById('obtener');
	boton.addEventListener('click', obtener, false);
};

function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);
};

function mostrar(posicion){
	var ubicacion=document.getElementById('localizacion');
	var datos='';
	datos+='Latitud: '+posicion.coords.latitude+'<br>';
	datos+='Longitud: '+posicion.coords.longitude+'<br>';
	datos+='Exactitud: '+posicion.coords.accuracy+' metros.<br>';
	ubicacion.innerHTML=datos;
};

function gestionarErrores(error){
	alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+'a internet y habilite la opción permitir compartir ubicación física');
};

window.addEventListener('load', iniciar, false);

////////////////////////////////////// Direccion -->

////////////////////////////////////// Resize -->

window.onresize = function() {
  
    if(window.innerWidth < 767.98){
      
      $("#perfilToggle").html($("#content_Section_Profile").detach());
      $("#historialToggle").html($("#content_Section_Historial").detach());
      $("#direccionesToggle").html($("#content_Section_Direccion").detach());
      $("#notificacionesToggle").html($("#content_Section_Notificaciones").detach());

    }
    else{

      $("#content_Section_Profile").html($("#perfilToggle").detach());
      $("#content_Section_Historial").html($("#historialToggle").detach());
      $("#content_Section_Direccion").html($("#direccionesToggle").detach());
      $("#content_Section_Notificaciones").html($("#notificacionesToggle").detach());

    };
};

////////////////////////////////////// Resize <--
(function(){

  ocultar();

  if(window.innerWidth < 767.98){
      $("#perfilToggle").html($("#content_Section_Profile").detach());
      $("#historialToggle").html($("#content_Section_Historial").detach());
      $("#direccionesToggle").html($("#content_Section_Direccion").detach());
      $("#notificacionesToggle").html($("#content_Section_Notificaciones").detach());
  }else{
    mostrarPerfil();
  };

	$("#perfil").on("click",mostrarPerfil);
	$("#historial").on("click",mostrarHistorial);
	$("#direcciones").on("click",mostrarDireccion);
	$("#notificaciones").on("click",mostrarNotificacion);

  $("#btn_section_profile_editar").on("click",editarPerfil)
  $("#btn_section_profile_guardar").on("click",guardarPerfil)

})();