function login(){
    var  user, pass;
    
    user = document.getElementById("correo").value;
    pass = document.getElementById("password").value;
    error = document.getElementById("Contrasena o usuario equivocado").value;

    if(user == "beto" && pass == "1234"){
        
        window.location.href="MiCuenta.html";
    
    }  
}