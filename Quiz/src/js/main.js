const request = new XMLHttpRequest();
request.addEventListener('load', function (event) {
  const response = event.target.response.events;
  console.log(response[0].hardcoded);
  events(response);
});
request.responseType = 'json';
request.open('GET', '/event-api.json');
request.send();

const imagenes = [
  'img/bg-event.jpeg',
  'img/bg-event-2.jpg',
  'img/bg-event-3.jpeg',
  'img/bg-event-4.jpeg',
  'img/bg-event-5.jpeg',
];
let i = 0;
let io = 0;

$('#arrowright-js').click(function arrows(response){
  if(i > imagenes.length - 1) i = 0;
  document.foto.src = imagenes[i];
  i++;
  if(io > response.length -1) io = 0;
  $('#slider_date').text(response[io].hardcoded);
  // $('#slider_date').text(response[io].name.text);
});

$('#arrowleft-js').click(function arrows(){
  if (i > imagenes.length - 1) i = 0;
  $('#slider_image_first').attr(imagenes[i]);
  i++;
});

function events(response) {
  $('#e_first').text(response[0].hardcoded);
  $('#name_first').text(response[0].name.text);
  $('#location_first').text(response[0].venue.name);

  $('#e_second').text(response[1].hardcoded);
  $('#name_second').text(response[1].name.text);
  $('#location_second').text(response[1].venue.name);


  $('#e_third').text(response[2].hardcoded);
  $('#name_third').text(response[2].name.text);
  $('#location_third').text(response[2].venue.name);

  $('#e_quarter').text(response[3].hardcoded);
  $('#name_quarter').text(response[3].name.text);
  $('#location_quarter').text(response[3].venue.name);

  $('#e_fifth').text(response[4].hardcoded);
  $('#name_fifth').text(response[4].name.text);
  $('#location_fifth').text(response[4].venue.name);

  const fifth = document.getElementById('fifth');
  fifth.setAttribute('href', response[4].url);
  const quarter = document.getElementById('quarter');
  quarter.setAttribute('href', response[3].url);
  const third = document.getElementById('third');
  third.setAttribute('href', response[2].url);
  const second = document.getElementById('second');
  second.setAttribute('href', response[1].url);
  const first = document.getElementById('first');
  first.setAttribute('href', response[0].url);
}
