
window.onresize = function() {
  
    if(window.innerWidth < 767.98){
      
      $("#productos").html($("#subtotal").detach());

    }
    else{

      $("#subtotal").html($("#productos").detach());

    };
};

(function(){

})();