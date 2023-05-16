
var nombre = document.getElementById("form-forename");
var apellido = document.getElementById("form-surname");
var email = document.getElementById("form-email");
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var seleccion = document.getElementById("ckeck");

function validarFormulario() {
   console.log(nombre);
   var mensajeError = [];
   let infoCompleta = true;

   if (nombre.value === null || nombre.value === "") {
      mensajeError.push("Debe ingresar su apellido");
      infoCompleta = false;
   }
   if (apellido.value === null || apellido.value === "") {
      mensajeError.push("Debe ingresar su apellido");
      infoCompleta = false;

   }

   if (!validEmail.test(email.value)) {
      mensajeError.push("Debe ingresar un E-mail válido");
      infoCompleta = false;

   }


   if (intereses.selectedIndex == 0) {
      mensajeError.push("Debe seleccionar en que servicio esta interesado.");
      infoCompleta = false;
   }

   if (infoCompleta === false) {
      Swal.fire({
         text: mensajeError.join(". "),
         icon: "error",
      });

   }

   if (infoCompleta === true) {
      Swal.fire({
         title: "Muchas gracias",
         text: "Lo estaremos contactando a la brevedad",
         icon: "success",
      });
   }

}


