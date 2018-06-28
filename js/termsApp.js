/*
function mostrar(){
		console.log("click");
};
*/

function llenarPage(data){
	let a = 1;
	for(literal of data.records){
		let sTitulo = literal.titulo;
		let sParrafo = literal.parrafo;
        $('table').append("<tr id='termino"+a+"' data-toggle='collapse' data-target='#accordion"+a+"' class='clickbox' data-parent='#termsTable'><th>" + sTitulo + "</th></tr>");
        $('table').append("<tr id='accordion"+a+"' class='collapse'><td class='hiddenRow'><p class='parrafoSection'>" + sParrafo + "</p></td></tr>");
        a += 1;
	}
}

function cargarTermsJSON() {
	$.ajax({
		type:"GET",
		url:"data/termsConds.json",
		dataType:"json",
		success: llenarPage
	});
}

window.onresize = function() {
  
    if(window.innerWidth < 768){
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

/*function ocultar() {
	console.log("collapse!!");
   	//$('.collapse.in').collapse('hide');
}*/


/*$('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').collapse('hide');
});*/

(function(){	
	//$('.collapse').on('show.bs.collapse',ocultar);
	
	cargarTermsJSON();
	/*$('[id^="termino"]').on("click",ocultar);*/
})();
