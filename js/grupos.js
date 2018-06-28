function grupos(){
	let aviso = "";
	aviso += "Grupo 6[BOLD]:\n";
	aviso += " -index.html\n";
	aviso += " -profile.html\n";
	aviso += " -cart.html\n";
	aviso += " -terms.html\n";
	aviso += " -blogs.html\n";
	aviso += "Extras:\n";
	aviso += " -story.html\n";
	aviso += "Las demas pantallas son desarrolladas por el grupo 3.\n";
	alert(aviso);
};

(function(){
	$("#linkProductos").on("click",grupos);
	$("#linkSocios").on("click",grupos);
	$("#linkContacto").on("click",grupos);
	$("#linkFaqs").on("click",grupos);
})();