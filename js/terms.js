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
        $('table').append("<tr id='accordion"+a+"'><td id='tdHiddenRow' ><p class='parrafoSection'>" + sParrafo + "</p></td></tr>");
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
    	$("[id^=accordion]").attr("class","collapse");
    	$("#tdHiddenRow").attr("class","hiddenRow");
    }
    else{
    	$("[id^=accordion]").classList.remove("collapse");
    	$("#tdHiddenRow").classList.remove("hiddenRow");
    };
};



/*$('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').collapse('hide');
});*/

(function(){	
	//$('.collapse').on('show.bs.collapse',ocultar);
	
	cargarTermsJSON();
	$('[id^="termino"]').on("click",ocultar);
})();
