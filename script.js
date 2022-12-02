function login(){
    var  user, pass;
    
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contrasena").value;


    if((user == "beto") && (pass == "1234")){
        
        window.location = "MiCuenta.html";

    }
}