let arrow_left = document.getElementById("slider_arrow_left");
let arrow_right = document.getElementById("slider_arrow_right");
let container_slider = document.getElementById("container_slider");
let imagenes = [];
let contador = 0;

// array de imagenes
imagenes[0] = "img/bg-event-2.jpg";
imagenes[1]= "img/bg-event-3.jpeg";
imagenes[2]= "img/bg-event-4.jpeg";
imagenes[3]= "img/bg-event-5.jpeg";

arrow_right.addEventListener("click", siguiente);
for(i=0; i<=12 ; i++){
    function siguiente(i){
        arrow_right.onclick= function (){
            let image = document.getElementById("slider_image_first").style.display ="none";
            let imagen2 = document.getElementById("slider_image").style.display = "block";
        };
    }
}
siguiente();

// Crea el request.
const request = new XMLHttpRequest();

// Registra el manejador de eventos.
request.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  const response = event.target.response;
  console.log(response);
  // Itera sobre los resultados y los agrega a la lista.

})
// Define el tipo de respuesta.
request.responseType = 'json';

// Inicializa el request.
request.open('GET', '/event-api.json');

// Envía el request.
request.send();

