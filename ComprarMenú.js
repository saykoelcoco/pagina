+function infoDelEnvio(){
    var  menu, nombre,metodoPago, direcc, monto; 
    
    menu = document.getElementById("menuElegido").value;
    nombre = document.getElementById("nombre").value;
    metodoPago = document.getElementById("metodoPago").value;
    direcc = document.getElementById("direccion").value;  
    monto = document.getElementById("monto").value;

    document.write ("Confirme sus datos" + menu + nombre  + metodoPago + direcc + monto);
     
    
    
}  
