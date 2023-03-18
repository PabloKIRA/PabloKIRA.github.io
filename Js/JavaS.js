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
  var progressBar = $('.progress-bar');
  var progress = 0;
  var interval = setInterval(function() {
    progress += 5;
    if (progress > 100) {
      clearInterval(interval);
    }
    progressBar.css('width', progress + '%');
  }, 100);
});

$(document).ready(function() {
  var progressBar = $('.progress-bar');
  var progressText = $('.progress-text');
  var progress = 0;
  var interval = setInterval(function() {
    progress += 5;
    if (progress > 100) {
      clearInterval(interval);
    }
    progressBar.css('width', progress + '%');
    progressText.text(progress + '%');
  }, 100);
});


