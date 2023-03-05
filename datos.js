const signUp = e => {
    let name = document.getElementById('nombre').value,
        email = document.getElementById('correo').value,
        user = document.getElementById('usuario').value,
        pwd = document.getElementById('contraseña').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.name.toLowerCase() == name.toLowerCase() && 
            data.correo.toLowerCase() == correo.toLowerCase()
        );

    if(!exist){
        formData.push({ name, email, user, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('nombre').focus();
        alert("Usuario registrado, favor de iniciar sesión");
        location.href = "login.html";
    }
    else{
        alert("El usuario ya se encuentra registrado");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('correo').value, pwd = document.getElementById('contraseña').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Correo o contraseña incorrectos ");
    }
    else{
        location.href = "PantallaPrincipal.html";
    }
    e.preventDefault();
}
