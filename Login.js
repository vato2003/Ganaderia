function login(){
    var user,password


user = document.getElementById("usuario").value;
password = document.getElementById("contraseña").value;

if( user == "Usuario1" && password == 12345){
    alert("Inicio de Sesion correcto")
    window.location = "Ganaderia2.html";
}else{
    alert("Usuario o contraseña incorrecta")
}

}