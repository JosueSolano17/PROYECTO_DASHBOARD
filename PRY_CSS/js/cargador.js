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
      }
    });
}

function cargarUsuario() {

  let correo = document.getElementById('email_usuer').textContent;
   let storedNombre = localStorage.getItem('nombre_r');
    let storedApellido = localStorage.getItem('apellido_r');
  document.getElementById('correo_usuario').textContent = "Correo: " + correo;
  document.getElementById('nombre_usuario').textContent = "Nombre: " + storedNombre + " " + storedApellido;
 document.getElementById('movimientos').style.display = 'none';
document.getElementById('movimientos_s').style.display = 'inline-block';
document.getElementById('img_usuarios').style.display = 'inline-block';
document.getElementById('img_usuario').style.display = 'none';

if(correo==="alexandertoapanta05@gmail.com"){
  document.getElementById('correo_usuario').textContent = "Correo: " + "alexandertoapanta05@gmail.com";
  document.getElementById('nombre_usuario').textContent = "Nombre: " + "Alexander" + " " + "Toapanta";
 document.getElementById('movimientos').style.display = 'inline-block';
document.getElementById('movimientos_s').style.display = 'none';
document.getElementById('img_usuarios').style.display = 'none';
document.getElementById('img_usuario').style.display = 'inline-block';

}
  
  

}
