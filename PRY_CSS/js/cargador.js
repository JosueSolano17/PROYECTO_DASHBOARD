
fetch("./paginas/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("menu").innerHTML = data);

fetch("./paginas/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);


fetch("./paginas/bienvenida.html")
  .then(res => res.text())
  .then(data => document.getElementById("contenido").innerHTML = data); 
 
 /*  cargarDatosAdmin(); */

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
       

       
      }
       if (url_pagina === "actualizacion_datos") {
       CargarDatosUsuario();
       
       
      }
    });
}

function cargarUsuario() {
 let correo = document.getElementById('email_usuer').textContent;
   let Nombre = localStorage.getItem('nombre_r');
    let Apellido = localStorage.getItem('apellido_r');
     let latitud=localStorage.getItem('latitud_r');
  let longitud=localStorage.getItem('longitud_r');
   let fecha_na=localStorage.getItem('fecha_nacimiento_r');
    let foto_estudiante=localStorage.getItem('foto_estudiante_r');


/* Datos quemados */
let correo_p= localStorage.getItem('correo_p');
let Nombre_p = localStorage.getItem('nombre_p');
 let Apellido_P = localStorage.getItem('apellido_p');

  document.getElementById('correo_usuario').textContent = "Correo: " + correo;
  document.getElementById('nombre_usuario').textContent = "Nombre: " + Nombre + " " + Apellido;
  document.getElementById('latitud_usuario').textContent = "Ubicacion: " + latitud + " " +longitud ;
  document.getElementById('fecha_na_usuario').textContent = "Fecha de Nacimiento: " + fecha_na  ;
  document.getElementById('edad_usuario').textContent = "Edad: " + Calcular_Edad() ;
  document.getElementById('img_usuario').src=foto_estudiante;
  
 
/*  document.getElementById('movimientos').style.display = 'none';
document.getElementById('movimientos_s').style.display = 'inline-block';
document.getElementById('img_usuarios').style.display = 'inline-block';
document.getElementById('img_usuario').style.display = 'none'; */


if(correo=== correo_p){
  document.getElementById('correo_usuario').textContent = "Correo: " + correo_p;
  document.getElementById('nombre_usuario').textContent = "Nombre: " + Nombre_p + " " + Apellido_P;
 document.getElementById('movimientos').style.display = 'inline-block';
document.getElementById('movimientos_s').style.display = 'none';
document.getElementById('img_usuarios').style.display = 'none';
document.getElementById('img_usuario').style.display = 'inline-block';

} 

}

/* function cargarDatosAdmin(){
let correo= "alexandertoapanta05@gmail.com";
let password="12345" ;
let nombre= "Alexander";
let apellido="Toapanta";
  localStorage.setItem('nombre_p', nombre);
    localStorage.setItem('apellido_p', apellido);
    localStorage.setItem('correo_p', correo);
    localStorage.setItem('password_p', password);
} */

function CargarDatosUsuario() {
  let correo = document.getElementById('email_usuer').textContent;
  let nombre = localStorage.getItem('nombre_r');
  let apellido = localStorage.getItem('apellido_r');
  let password = localStorage.getItem('password_r');
     let fecha_na=localStorage.getItem('fecha_nacimiento_r');
   let latitud=localStorage.getItem('latitud_r');
  let longitud=localStorage.getItem('longitud_r');


 /* Datos quemados */
  let correo_p= localStorage.getItem('correo_p');
  let nombre_p = localStorage.getItem('nombre_p');
  let apellido_p = localStorage.getItem('apellido_p');
  let password_p = localStorage.getItem('password_p');

  document.getElementById('txt_correo_actualizado').value = correo;
  document.getElementById('txt_nombre_actualizado').value = nombre ;
  document.getElementById('txt_apellido_actualizado').value = apellido ;
  document.getElementById('password_actualizada').value = password ;
   document.getElementById('fecha_actualizada').value = fecha_na ;
 document.getElementById('txt_Latitud_actualizada').value = latitud ;
  document.getElementById('txt_Longitud_actualizada').value = longitud; 


  



  if (correo === correo_p) {
 
     document.getElementById('txt_correo_actualizado').value = correo_p;
  document.getElementById('txt_nombre_actualizado').value = nombre_p ;
  document.getElementById('txt_apellido_actualizado').value = apellido_p ;
  document.getElementById('password_actualizada').value = password_p ;
  

  }
}


