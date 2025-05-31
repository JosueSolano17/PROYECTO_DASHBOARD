let stream = null;

let actualizacion;

function Login() {
    let emailInput = document.getElementById('txt_email_login');
    let passwordInput = document.getElementById('txt_password_login');
    let email = emailInput.value;
    let password = passwordInput.value;
    let storedEmail = localStorage.getItem('correo_r');
    let storedPassword = localStorage.getItem('password_r');
    let storedEmail_p = localStorage.getItem('correo_p');
    let storedPassword_p = localStorage.getItem('password_p');

    if (email === storedEmail_p && password === storedPassword_p) {
        alert('Inicio de sesión correcto');
        cargarPaginas('usuario');
        document.getElementById('navbarDropdown').style.display = 'inline-block';
        document.getElementById('email_usuer').textContent = storedEmail_p;

    } else if (email === storedEmail && password === storedPassword) {
        alert('Inicio de sesión correcto');
        cargarPaginas('usuario');
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
    let fecha = document.getElementById('fecha').value;
    let correo_prueb = localStorage.getItem('correo_p');
    let latitud = document.getElementById('txt_Latitud').value;
    let longitud = document.getElementById('txt_Longitud').value;
    let foto = document.getElementById('foto_estudiante').value;
    let codigo_pais = document.getElementById('codigo_pais').value;
    let telefono = document.getElementById('telefono').value;

    let genero = document.querySelector('input[name="genero"]:checked');
    let musicas = document.querySelectorAll('input[type="checkbox"]:checked');

    if (!email || !nombre || !apellido || !password || !fecha || !foto || !latitud || !longitud || !telefono || !codigo_pais) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }

    if (!genero) {
        alert('Por favor, selecciona un género.');
        return;
    }

    if (musicas.length === 0) {
        alert('Por favor, selecciona al menos una música favorita.');
        return;
    }

    if (email === correo_prueb) {
        alert('Correo ya ingresado');
    } else {
        let generoSeleccionado = genero.value;
        let musicasSeleccionadas = [];
        musicas.forEach(m => musicasSeleccionadas.push(m.value));

        localStorage.setItem('nombre_r', nombre);
        localStorage.setItem('apellido_r', apellido);
        localStorage.setItem('correo_r', email);
        localStorage.setItem('password_r', password);
        localStorage.setItem('fecha_nacimiento_r', fecha);
        localStorage.setItem('latitud_r', latitud);
        localStorage.setItem('longitud_r', longitud);
        localStorage.setItem('foto_estudiante_r', foto);
        localStorage.setItem('codigo_pais_r', codigo_pais);
        localStorage.setItem('telefono_r', telefono);
        localStorage.setItem('genero_r', generoSeleccionado);
        localStorage.setItem('musicas_r', JSON.stringify(musicasSeleccionadas));
        deshabilitar_Camara();
        document.getElementById('foto_estudiante').value = '';
       document.getElementById("actualizarModalBody").textContent = "Registro exitoso!";
        const modal = new bootstrap.Modal(document.getElementById("actualizarModal"));
        modal.show();
    }
}





function CerrarSesion() {
    document.getElementById('navbarDropdown').style.display = 'none';
    document.getElementById('email_usuer').textContent = " ";
    deshabilitar_Camara();
     document.getElementById("cerrarSesionModalBody").textContent = "Cerrada Sesión correctamente!";
        const modal = new bootstrap.Modal(document.getElementById("cerrarSesionModal"));
        modal.show();
    
   
}

function Actualizar() {
    let emailInput = document.getElementById('txt_correo_actualizado');
    let nombreInput = document.getElementById('txt_nombre_actualizado');
    let apellidoInput = document.getElementById('txt_apellido_actualizado');
    let passwordInput = document.getElementById('password_actualizada');
    let fecha = document.getElementById('fecha_actualizada').value;
    let latitud = document.getElementById('txt_Latitud_actualizada').value;
    let longitud = document.getElementById('txt_Longitud_actualizada').value;
    let foto = document.getElementById('foto_estudiante').value;

    let codigo_pais = document.getElementById('codigo_pais_actualizado').value;
    let telefono = document.getElementById('telefono_actualizado').value;

    let genero = document.querySelector('input[name="genero_actualizado"]:checked')?.value || "";
    let musicasSeleccionadas = Array.from(document.querySelectorAll('.musica_actualizada:checked')).map(cb => cb.value);

    let correo_p = localStorage.getItem('correo_p');
    let email = emailInput.value;
    let nombre = nombreInput.value;
    let apellido = apellidoInput.value;
    let password = passwordInput.value;

    if (!email || !nombre || !apellido || !password || !fecha || !latitud || !longitud || !codigo_pais || !telefono|| !genero) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }

    if (email === correo_p) {
        localStorage.setItem('nombre_p', nombre);
        localStorage.setItem('apellido_p', apellido);
        localStorage.setItem('correo_p', email);
        document.getElementById('email_usuer').textContent = email;
        localStorage.setItem('password_p', password);
        localStorage.setItem('fecha_nacimiento_p', fecha);
        localStorage.setItem('latitud_p', latitud);
        localStorage.setItem('longitud_p', longitud);
        localStorage.setItem('foto_estudiante_p', foto);
         localStorage.setItem('telefono_p', telefono);
        localStorage.setItem('genero_p', genero);
        localStorage.setItem('musicas_p', JSON.stringify(musicasSeleccionadas));

       
    } else {
        localStorage.setItem('nombre_r', nombre);
        localStorage.setItem('apellido_r', apellido);
        localStorage.setItem('correo_r', email);
        document.getElementById('email_usuer').textContent = email;
        localStorage.setItem('password_r', password);
        localStorage.setItem('fecha_nacimiento_r', fecha);
        localStorage.setItem('latitud_r', latitud);
        localStorage.setItem('longitud_r', longitud);
        localStorage.setItem('codigo_pais_r', codigo_pais);
        localStorage.setItem('foto_estudiante_r', foto);
        localStorage.setItem('telefono_r', telefono);
        localStorage.setItem('genero_r', genero);
        localStorage.setItem('musicas_r', JSON.stringify(musicasSeleccionadas));
        
    }

    document.getElementById('foto_estudiante').value = '';
    deshabilitar_Camara();
     document.getElementById("actualizarModalBody").textContent = "Datos actualizados correctamente!";
        const modal = new bootstrap.Modal(document.getElementById("actualizarModal"));
        modal.show();
}


function Localizacion() {
    let geolocation = navigator.geolocation;
    if (geolocation) {
        geolocation.getCurrentPosition(function (posiciones) {
            let latitud = posiciones.coords.latitude;
            let longitud = posiciones.coords.longitude;
            document.getElementById('txt_Latitud').value = latitud;
            document.getElementById('txt_Longitud').value = longitud;
              latitud = parseFloat(latitud);
    longitud = parseFloat(longitud);

    var map = L.map('map').setView([latitud, longitud], 13);

   
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

  
    L.marker([latitud, longitud])
        .addTo(map)
        .bindPopup('Su ubicación actual es')
        .openPopup();

        });
    } else {
        alert('No soporta la geolocation api')
    }

  

}
function Mapa() {
    let latitud;
    let longitud;
    let storedEmail = localStorage.getItem('correo_r');
    let storedEmail_p = localStorage.getItem('correo_p');
    let email = document.getElementById('email_usuer').textContent;

    if (email == storedEmail) {
        latitud = localStorage.getItem('latitud_r');
        longitud = localStorage.getItem('longitud_r');
    } else {
        latitud = localStorage.getItem('latitud_p');
        longitud = localStorage.getItem('longitud_p');
    }

   
    latitud = parseFloat(latitud);
    longitud = parseFloat(longitud);

    var map = L.map('map').setView([latitud, longitud], 13);

   
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

  
    L.marker([latitud, longitud])
        .addTo(map)
        .bindPopup('Su ubicación actual es')
        .openPopup();
}

function Calcular_Edad(fecha_nacimiento) {
    let fecha_na = fecha_nacimiento;
    let fechaNacimiento = new Date(fecha_na);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    let dia = hoy.getDate() - fechaNacimiento.getDate();
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }

    return edad;
}
function habilitar_Camara() {
    document.getElementById('camara_foto').style.display = 'inline-block';
    document.getElementById('btn_hc').style.display = 'none';

    navigator.mediaDevices.getUserMedia({ video: true }).then(


        s => {
            stream = s


            document.getElementById('my_camara').srcObject = stream;
        }
    ).catch(error => {
        console.log(error)
    });


}
function deshabilitar_Camara() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        document.getElementById('my_camara').srcObject = null;
        document.getElementById('camara_foto').style.display = 'none';
        document.getElementById('btn_hc').style.display = 'inline-block';
    }
}
function tomarFoto() {
    const video = document.getElementById('my_camara');
    const canvas = document.getElementById('foto');
    const ctx = canvas.getContext('2d');

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    GuardarImagen(canvas);


}
function GuardarImagen(canvas) {
    try {
        const dataUrl = canvas.toDataURL('image/png');
     
        document.getElementById('foto_estudiante').value = dataUrl;
    } catch (e) {
        console.error('Error al convertir el canvas a Base64:', e);
    }
}

function Localizacion_ac() {
    let geolocation = navigator.geolocation;
    if (geolocation) {
        geolocation.getCurrentPosition(function (posiciones) {
            let latitud = posiciones.coords.latitude;
            let longitud = posiciones.coords.longitude;
            document.getElementById('txt_Latitud_actualizada').value = latitud;
            document.getElementById('txt_Longitud_actualizada').value = longitud;

        });
    } else {
        alert('No soporta la geolocation api')
    }
}

