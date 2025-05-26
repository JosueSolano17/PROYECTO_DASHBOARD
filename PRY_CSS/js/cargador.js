
fetch("./paginas/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("menu").innerHTML = data);

fetch("./paginas/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);


fetch("./paginas/bienvenida.html")
  .then(res => res.text())
  .then(data => document.getElementById("contenido").innerHTML = data);  

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
        cargarDatosAdmin(cambio, nombre, apellido);
       
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

 
  document.getElementById('correo_usuario').textContent = "Correo: " + correo;
  document.getElementById('nombre_usuario').textContent = "Nombre: " + Nombre + " " + Apellido;
 document.getElementById('movimientos').style.display = 'none';
document.getElementById('movimientos_s').style.display = 'inline-block';
document.getElementById('img_usuarios').style.display = 'inline-block';
document.getElementById('img_usuario').style.display = 'none';


if(correo=== "alexandertoapanta05@gmail.com"){
  document.getElementById('correo_usuario').textContent = "Correo: " + "alexandertoapanta05@gmail.com";
  document.getElementById('nombre_usuario').textContent = "Nombre: " + "Alexander" + " " + "Toapanta";
 document.getElementById('movimientos').style.display = 'inline-block';
document.getElementById('movimientos_s').style.display = 'none';
document.getElementById('img_usuarios').style.display = 'none';
document.getElementById('img_usuario').style.display = 'inline-block';

} 

}

/* function cargarDatosAdmin(cambio, nombre, apellido){
if(cambio=true){
document.getElementById('correo_usuario').textContent = "Correo: " + "alexandertoapanta05@gmail.com";
document.getElementById('nombre_usuario').textContent = "Nombre: " + nombre + " " + apellido;
}
} */

function CargarDatosUsuario() {
  let correo = document.getElementById('email_usuer').textContent;
  let nombre = localStorage.getItem('nombre_r');
  let apellido = localStorage.getItem('apellido_r');
  let password = localStorage.getItem('password_r');
  let codigoPais = localStorage.getItem('codigopais_r');
  let telefono = localStorage.getItem('num_celular_r');
  let genero = localStorage.getItem('genero_r');
  let genero_t="Hombre"
  let fecha = localStorage.getItem('fecha_nacimiento_r');
  let musica = JSON.parse(localStorage.getItem('musica_fav_r') );

  document.getElementById('txt_correo_actualizado').value = correo;
  document.getElementById('txt_nombre_actualizado').value = nombre ;
  document.getElementById('txt_apellido_actualizado').value = apellido ;
  document.getElementById('password_actualizada').value = password ;

  document.getElementById('codigo_pais_actualizado').value = codigoPais ;
  document.getElementById('telefono_actualizado').value = telefono ;
  document.getElementById('fecha_actualizada').value = fecha ;

  
  if (genero) {
    let generoRadio = document.querySelector(`input[name="genero_actualizado"][value="${genero}"]`);
    if (generoRadio) generoRadio.checked = true;
  }


  document.querySelectorAll('input[name="musica_actualizada"]').forEach((checkbox) => {
    checkbox.checked = musica.includes(checkbox.value);
  });


  if (correo === "alexandertoapanta05@gmail.com") {
    document.getElementById('txt_correo_actualizado').readOnly = true;
    document.getElementById('password_actualizada').readOnly = true;
    document.getElementById('txt_correo_actualizado').value = "alexandertoapanta05@gmail.com";
    document.getElementById('txt_nombre_actualizado').value = "Alexander";
    document.getElementById('txt_apellido_actualizado').value = "Toapanta";
    document.getElementById('password_actualizada').value = "12345";
  document.getElementById('codigo_pais_actualizado').value =  "+593";
  document.getElementById('telefono_actualizado').value = "983845189" ;
  document.getElementById('fecha_actualizada').value = "2004-11-01" ;

  
  if (genero) {
    let generoRadio = document.querySelector(`input[name="genero_actualizado"][value="${genero_t}"]`);
    if (generoRadio) generoRadio.checked = true;
  }


  document.querySelectorAll('input[name="musica_actualizada"]').forEach((checkbox) => {
    checkbox.checked = (checkbox.value === "Silverbullet");
});

  }
}


