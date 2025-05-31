
fetch("./paginas/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("menu").innerHTML = data);

fetch("./paginas/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);


fetch("./paginas/bienvenida.html")
  .then(res => res.text())
  .then(data => document.getElementById("contenido").innerHTML = data); 
 
  cargarDatosAdmin();

function cargarPaginas(url_pagina) {
  fetch(`paginas/${url_pagina}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("contenido").innerHTML = data;

      if (url_pagina === 'dashboard') {
       
        const script = document.createElement('script');
        script.src = './js/chart.js'; 
        script.onload = () => {
          if (typeof graficas === 'function') {
            graficas();
          }
        };
        document.body.appendChild(script);
      } else if (url_pagina === 'signup') {
        
        if (typeof Login === 'function') {
          Login();
        }
      }
      if (url_pagina === "usuario") {
        cargarUsuario();
        Mapa();
        deshabilitar_Camara();
       
      }
       if (url_pagina === "actualizacion_datos") {
       CargarDatosUsuario();
        Mapa();
       
       
      }
    });
}

function cargarUsuario() {
    let correo = document.getElementById('email_usuer').textContent;

    let Nombre = localStorage.getItem('nombre_r');
    let Apellido = localStorage.getItem('apellido_r');
    let fecha_na = localStorage.getItem('fecha_nacimiento_r');
    let foto_estudiante = localStorage.getItem('foto_estudiante_r');
    let codigo_pais = localStorage.getItem('codigo_pais_r');
    let telefono = localStorage.getItem('telefono_r');
    let genero = localStorage.getItem('genero_r');
    let musicas = JSON.parse(localStorage.getItem('musicas_r')) || [];
    let latitud = localStorage.getItem('latitud_r');
    let longitud = localStorage.getItem('longitud_r');

    let correo_p = localStorage.getItem('correo_p');
    let Nombre_p = localStorage.getItem('nombre_p');
    let Apellido_P = localStorage.getItem('apellido_p');
    let latitud_p = localStorage.getItem('latitud_p');
    let longitud_p = localStorage.getItem('longitud_p');
    let fecha_na_p = localStorage.getItem('fecha_nacimiento_p');
    let foto_estudiante_p = localStorage.getItem('foto_estudiante_p');
     let genero_p = localStorage.getItem('genero_p');
    let musicas_p = JSON.parse(localStorage.getItem('musicas_p')) || [];
     let codigo_pais_p = localStorage.getItem('codigo_pais_p');
    let telefono_p = localStorage.getItem('telefono_p');
 


    if (correo === correo_p) {
        document.getElementById('correo_usuario').textContent = "Correo: " + correo_p;
        document.getElementById('nombre_usuario').textContent = "Nombre: " + Nombre_p + " " + Apellido_P;
        document.getElementById('latitud_usuario').textContent = "Ubicación: Latitud " + latitud_p + ", Longitud " + longitud_p;
        document.getElementById('fecha_na_usuario').textContent = "Fecha de Nacimiento: " + fecha_na_p;
        document.getElementById('edad_usuario').textContent = "Edad: " + Calcular_Edad(fecha_na_p);
        document.getElementById('img_usuario').src = foto_estudiante_p;
          document.getElementById('telefono_usuario').textContent = "Número de Teléfono: " + codigo_pais_p + " " + telefono_p;
        document.getElementById('genero_usuario').textContent = "Género: " + genero_p;
        document.getElementById('materias_usuario').textContent = "Músicas favoritas: " + musicas_p.join(", ");
    } else {
        document.getElementById('correo_usuario').textContent = "Correo: " + correo;
        document.getElementById('nombre_usuario').textContent = "Nombre: " + Nombre + " " + Apellido;
        document.getElementById('latitud_usuario').textContent = "Ubicación: Latitud " + latitud + ", Longitud " + longitud;
        document.getElementById('fecha_na_usuario').textContent = "Fecha de Nacimiento: " + fecha_na;
        document.getElementById('edad_usuario').textContent = "Edad: " + Calcular_Edad(fecha_na);
        document.getElementById('img_usuario').src = foto_estudiante;
        document.getElementById('telefono_usuario').textContent = "Número de Teléfono: " + codigo_pais + " " + telefono;
        document.getElementById('genero_usuario').textContent = "Género: " + genero;
        document.getElementById('materias_usuario').textContent = "Músicas favoritas: " + musicas.join(", ");
    }
}


/* function cargarDatosAdmin() {
  let correo = "alexandertoapanta05@gmail.com";
  let password = "12345";
  let nombre = "Alexander";
  let apellido = "Toapanta";
  let latitud = "-0.2935564";
  let longitud = "-78.4837078";
  let fecha_na = "2004-11-01";
  let foto = "./imagenes/imagen_estudiante_qm.png";
  let codigo_pais = "+593";
  let telefono = "987654321"; 
  let genero = "Masculino";
  let musicas = ["Beggin - Måneskin", "Devil Trigger -Casey Edwards"];

  localStorage.setItem('nombre_p', nombre);
  localStorage.setItem('apellido_p', apellido);
  localStorage.setItem('correo_p', correo);
  localStorage.setItem('password_p', password);
  localStorage.setItem('fecha_nacimiento_p', fecha_na);
  localStorage.setItem('latitud_p', latitud);
  localStorage.setItem('longitud_p', longitud);
  localStorage.setItem('foto_estudiante_p', foto);
  localStorage.setItem('codigo_pais_p', codigo_pais);
  localStorage.setItem('telefono_p', telefono);
  localStorage.setItem('genero_p', genero);
  localStorage.setItem('musicas_p', JSON.stringify(musicas));
} */


function CargarDatosUsuario() {
  let correo = document.getElementById('email_usuer').textContent;

  let nombre = localStorage.getItem('nombre_r');
  let apellido = localStorage.getItem('apellido_r');
  let password = localStorage.getItem('password_r');
  let fecha_na = localStorage.getItem('fecha_nacimiento_r');
  let latitud = localStorage.getItem('latitud_r');
  let longitud = localStorage.getItem('longitud_r');
  let foto = localStorage.getItem('foto_estudiante_r');
  let codigo_pais = localStorage.getItem('codigo_pais_r');
  let telefono = localStorage.getItem('telefono_r');
  let genero = localStorage.getItem('genero_r');
  let musicas = JSON.parse(localStorage.getItem('musicas_r')) || [];
  
  let correo_p = localStorage.getItem('correo_p');
  let nombre_p = localStorage.getItem('nombre_p');
  let apellido_p = localStorage.getItem('apellido_p');
  let password_p = localStorage.getItem('password_p');
  let fecha_na_p = localStorage.getItem('fecha_nacimiento_p');
  let latitud_p = localStorage.getItem('latitud_p');
  let longitud_p = localStorage.getItem('longitud_p');
  let foto_p = localStorage.getItem('foto_estudiante_p');
      let genero_p = localStorage.getItem('genero_p');
    let musicas_p = JSON.parse(localStorage.getItem('musicas_p')) || [];
     let codigo_pais_p = localStorage.getItem('codigo_pais_p');
    let telefono_p = localStorage.getItem('telefono_p');

  if (correo === correo_p) {
    document.getElementById('txt_correo_actualizado').value = correo_p;
    document.getElementById('txt_nombre_actualizado').value = nombre_p;
    document.getElementById('txt_apellido_actualizado').value = apellido_p;
    document.getElementById('password_actualizada').value = password_p;
    document.getElementById('fecha_actualizada').value = fecha_na_p;
    document.getElementById('txt_Latitud_actualizada').value = latitud_p;
    document.getElementById('txt_Longitud_actualizada').value = longitud_p;
    document.getElementById('foto_estudiante').value = foto_p;
     document.getElementById('codigo_pais_actualizado').value = codigo_pais_p;
 
      document.getElementById('telefono_actualizado').value = telefono_p;
   
      let generoInput = document.querySelector(`input[name="genero_actualizado"][value="${genero_p}"]`);
      if (generoInput) generoInput.checked = true;
    

    document.querySelectorAll('.musica_actualizada').forEach(cb => {
      cb.checked = musicas_p.includes(cb.value);
    });
  } else {
    document.getElementById('txt_correo_actualizado').value = correo;
    document.getElementById('txt_nombre_actualizado').value = nombre;
    document.getElementById('txt_apellido_actualizado').value = apellido;
    document.getElementById('password_actualizada').value = password;
    document.getElementById('fecha_actualizada').value = fecha_na;
    document.getElementById('txt_Latitud_actualizada').value = latitud;
    document.getElementById('txt_Longitud_actualizada').value = longitud;
    document.getElementById('foto_estudiante').value = foto;


      document.getElementById('codigo_pais_actualizado').value = codigo_pais;
    

 
      document.getElementById('telefono_actualizado').value = telefono;
    

   
      let generoInput = document.querySelector(`input[name="genero_actualizado"][value="${genero}"]`);
      if (generoInput) generoInput.checked = true;
    

    document.querySelectorAll('.musica_actualizada').forEach(cb => {
      cb.checked = musicas.includes(cb.value);
    });
  }
}



