let *nombre_r ;
let *apellido_r ;
let *correo_r  ;
let *password_r ;

function Login() {
    let emailInput = document.getElementById('txt_email_login');
    let passwordInput = document.getElementById('txt_password_login');
    let email = emailInput.value;
    let password = passwordInput.value;
    let correo= document.getElementById('email_usuer').value;

    let storedEmail = localStorage.getItem('correo_r');
    let storedPassword = localStorage.getItem('password_r');
    let storedNombre = localStorage.getItem('nombre_r');
    let storedApellido = localStorage.getItem('apellido_r');

    if (email === "alexandertoapanta05@gmail.com" && password === "12346") {
        alert('Inicio de sesión correcto');
        cargarPaginas('dashboard');
        document.getElementById('navbarDropdown').style.display = 'inline-block';
        document.getElementById('email_usuer').textContent = "alexandertoapanta05@gmail.com";

    } else if (email === storedEmail && password === storedPassword) {
        alert('Inicio de sesión correcto');
        cargarPaginas('dashboard');
        document.getElementById('navbarDropdown').style.display = 'inline-block';
        document.getElementById('email_usuer').textContent = storedEmail;
    } else {
        alert('Correo o contraseña erróneos');
        emailInput.value = '';
        passwordInput.value = '';
        emailInput.focus();
    }
}


function Registro(){
let emailInput = document.getElementById('txt_email_Registro');
let passwordInput = document.getElementById('txt_password_Registro');
let nombreInput = document.getElementById('txt_Nombre_Registro');
let apellidoInput = document.getElementById('txt_apellido_Registro');
let email = emailInput.value;
let nombre = nombreInput.value;
let apellido = apellidoInput.value;
let password = passwordInput.value;
if(email === "alexandertoapanta05@gmail.com"){
alert('Correo ya ingresado');
}else{   
localStorage.setItem('nombre_r', nombre);
localStorage.setItem('apellido_r', apellido);
localStorage.setItem('correo_r', email);
localStorage.setItem('password_r', password);
alert('Resgitro Completado');
cargarPaginas('index');


}

}

function CerrarSesion(){
    document.getElementById('navbarDropdown').style.display = 'none';
    document.getElementById('email_usuer').textContent = " ";
    alert('Sesion cerrada correctamente');
    cargarPaginas('bienvenida');
}
