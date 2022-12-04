function login(){
    var  user, pass, error;
    
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contrasena").value;
    error = document.getElementById("Contrasena o usuario equivocado").value;

    if((user == "beto") && (pass == "1234")){
        
       window.location = "miCuenta.html";
    }{error
}
}