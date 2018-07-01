function buscar(){
    var elementos = $(".post_Blog");
    let texto = $('texto').value;
    for (element of elementos){
        var sString = elementos.querySelector("p");
        if (sString.include(texto)) {
            console.log(element);
        } 
    }


}

$("#buscar").click(buscar);