let *nombre_r ;
let *apellido_r ;
let *correo_r  ;
let *password_r ;
let *num_celular_r;
let *genero_r;
let *codigopais_r;
let *musica_fav_r;    
let* fecha_nacimiento_r;

let *nombre_p;
let *apellido_p ;
let *correo_p ;
let *password_p ;

let actualizacion;

function Login() {
    let emailInput = document.getElementById('txt_email_login');
    let passwordInput = document.getElementById('txt_password_login');
    let email = emailInput.value;
    let password = passwordInput.value;
    let storedEmail = localStorage.getItem('correo_r');
    let storedPassword = localStorage.getItem('password_r');
    let storedNombre = localStorage.getItem('nombre_r');
    let storedApellido = localStorage.getItem('apellido_r');

    if (email === "alexandertoapanta05@gmail.com" && password === "12345") {
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



function Registro() {
    let email = document.getElementById('txt_email_Registro').value.trim();
    let password = document.getElementById('txt_password_Registro').value.trim();
    let nombre = document.getElementById('txt_Nombre_Registro').value.trim();
    let apellido = document.getElementById('txt_apellido_Registro').value.trim();
    let codigoPais = document.getElementById('codigo_pais').value;
    let telefono = document.getElementById('telefono').value.trim();
    let genero = document.querySelector('input[name="genero"]:checked');
    let fecha = document.getElementById('fecha').value;

    let musicaSeleccionada = [];
    document.querySelectorAll('input[name="musica[]"]:checked').forEach((checkbox) => {
        musicaSeleccionada.push(checkbox.value);
    });

    if (!email || !nombre || !apellido || !password || !telefono || !genero || !fecha) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }


    if (email === "alexandertoapanta05@gmail.com") {
        alert('Correo ya ingresado');
        
    }else{
    localStorage.setItem('nombre_r', nombre);
    localStorage.setItem('apellido_r', apellido);
    localStorage.setItem('correo_r', email);
    localStorage.setItem('password_r', password);
    localStorage.setItem('codigopais_r', codigoPais);
    localStorage.setItem('num_celular_r', telefono);
    localStorage.setItem('genero_r', genero.value);
    localStorage.setItem('fecha_nacimiento_r', fecha);
    localStorage.setItem('musica_fav_r', JSON.stringify(musicaSeleccionada));
    alert('Registro completado')
    cargarPaginas('index');
    
    }

    
}


   


function CerrarSesion(){
    document.getElementById('navbarDropdown').style.display = 'none';
    document.getElementById('email_usuer').textContent = " ";
    alert('Sesion cerrada correctamente');
    cargarPaginas('bienvenida');
}

function Actualizar(){
let emailInput = document.getElementById('txt_correo_actualizado');
let nombreInput = document.getElementById('txt_nombre_actualizado');
let apellidoInput = document.getElementById('txt_apellido_actualizado');
let passwordInput = document.getElementById('password_actualizada');
let codigoPais = document.getElementById('codigo_pais_actualizado').value;
let telefono = document.getElementById('telefono_actualizado').value.trim();
let genero = document.querySelector('input[name="genero_actualizado"]:checked');
let fecha = document.getElementById('fecha_actualizada').value;
let email = emailInput.value;
let nombre = nombreInput.value;
let apellido = apellidoInput.value;
let password = passwordInput.value;

 if (!email || !nombre || !apellido || !password || !telefono || !genero || !fecha) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }

if(email === "alexandertoapanta05@gmail.com"){
alert('Cambios correctamente realizados')
 return;
 
} 
alert('Datos Actualizados')
localStorage.setItem('nombre_r', nombre);
localStorage.setItem('apellido_r', apellido);
localStorage.setItem('correo_r', email);
 document.getElementById('email_usuer').textContent = email;
localStorage.setItem('password_r', password);
localStorage.setItem('codigopais_r', codigoPais);
localStorage.setItem('num_celular_r', telefono);
localStorage.setItem('genero_r', genero.value);
localStorage.setItem('fecha_nacimiento_r', fecha);
localStorage.setItem('musica_fav_r', JSON.stringify(musicaSeleccionada));

}
