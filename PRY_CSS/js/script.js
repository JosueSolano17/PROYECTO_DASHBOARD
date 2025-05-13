function Login() {
    let emailInput = document.getElementById('txt_email_login');
    let passwordInput = document.getElementById('txt_password_login');
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === "alexandertopanata05@gmail.com" && password === "12346") {
    alert('Inicio de sesión correcto');
    cargarPaginas('dashboard');
} else if (email === "ajtoapanta6@espe.edu.ec" && password === "12345") {
    alert('Inicio de sesión correcto');
    cargarPaginas('dashboard');
} else {
    alert('Correo o contraseña erróneos');
    emailInput.value = '';
    passwordInput.value = '';
    emailInput.focus();
}
}

function Registro(){

}

function CerrarSesion(){
    document.getElementById('btn_usuario').style.display='none';
    document.getElementById('btn_Login').style.display='inline-block';
    document.getElementById('btn_admin').style.display = 'none';
    document.getElementById('btn_Stock').style.display = 'none';
    alert('Sesion cerrada correctamente');
    cargarPaginas('index');
}
