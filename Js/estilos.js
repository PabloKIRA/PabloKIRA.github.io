

//animacion de imagenes 

var imagen = document.getElementById("lenguajes");
imagen.onmousedown = animarImagen;

function animarImagen() {
  var imagen = document.getElementById("lenguajes");
  imagen.style.transform = "scale(1.2)";
  
  setTimeout(function() {
    imagen.style.transform = "scale(1)";
  }, 1000); // Demora de 1 segundo (1000 milisegundos)
}


$(document).ready(function() {
    $(".barraProgreso").each(function() {
      $(this).animate({
        value: $(this).attr("value")
      }, {
        duration: 2000, // Duración de la animación en milisegundos
        easing: "easeInOutCubic" // Efecto de la animación
      });
    });
  });
  
