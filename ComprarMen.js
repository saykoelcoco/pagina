function confirmarPedido(){
    var  menu, nombre, metodoPago, direcc, monto, confirmar;

    
    menu = document.getElementById("menuElegido").value;
    nombre = document.getElementById("nombre").value;
    metodoPago = document.getElementById("metodoPago").value;
    direcc = document.getElementById("direccion").value;
    monto = document.getElementById("monto").value;
    confirmar = confirm("Confirme pedido" +"  "+ menu +" "+ nombre +" "+ metodoPago +" "+ direcc +" "+ monto)


    if(confirmar){
        confirm("Seguir comprando")
        window.location.reload()
    }

}