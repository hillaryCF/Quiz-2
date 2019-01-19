const request = new XMLHttpRequest();

request.addEventListener('load', function (event) {

  const response = event.target.response.events;
  console.log(response[0].url);
  events(response);

})

request.responseType = 'json';

request.open('GET', '/event-api.json');

request.send();


function events(response) {
  // primer evento
  const event_st = document.getElementById('event_first');
  const tittle_st = document.getElementById('e_first');
  const name_st = document.getElementById('name_first');
  const location_st = document.getElementById('location_first');

  tittle_st.innerHTML = response[0].hardcoded;
  name_st.innerHTML = response[0].name.text;
  location_st.innerHTML = response[0].venue.name;

  event_st.appendChild(tittle_st);
  event_st.appendChild(name_st);
  event_st.appendChild(location_st);
  // console.log(tittle_st);

  // segundo evento
  let event_sd = document.getElementById('event_second');
  let tittle_sd = document.getElementById('e_second');
  const name_sd = document.getElementById('name_second');
  const location_sd = document.getElementById('location_second');

  tittle_sd.innerHTML = response[1].hardcoded;
  name_sd.innerHTML = response[1].name.text;
  location_sd.innerHTML = response[1].venue.name;

  event_sd.appendChild(tittle_sd);
  event_sd.appendChild(name_sd);
  event_sd.appendChild(location_sd);
  // console.log(tittle_sd);

  // tercero evento
  const event_td = document.getElementById('event_third');
  const tittle_td = document.getElementById('e_third');
  const name_td = document.getElementById('name_third');
  const location_td = document.getElementById('location_third');

  tittle_td.innerHTML = response[2].hardcoded;
  name_td.innerHTML = response[2].name.text;
  location_td.innerHTML = response[2].venue.name;

  event_td.appendChild(tittle_td);
  event_td.appendChild(name_td);
  event_td.appendChild(location_td);
  // console.log(tittle_td);

  // cuarto evento
  const event_q = document.getElementById('event_quarter');
  const tittle_q = document.getElementById('e_quarter');
  const name_q = document.getElementById('name_quarter');
  const location_q = document.getElementById('location_quarter');

  tittle_q.innerHTML = response[3].hardcoded;
  name_q.innerHTML = response[3].name.text;
  location_q.innerHTML = response[3].venue.name;

  event_q.appendChild(tittle_q);
  event_q.appendChild(name_q);
  event_q.appendChild(location_q);
  // console.log(tittle_q);

  // quinto evento
  const event_ft = document.getElementById('event_fifth');
  const tittle_ft = document.getElementById('e_fifth');
  const name_ft = document.getElementById('name_fifth');
  const location_ft = document.getElementById('location_fifth');

  tittle_ft.innerHTML = response[4].hardcoded;
  name_ft.innerHTML = response[4].name.text;
  location_ft.innerHTML = response[4].venue.name;

  event_ft.appendChild(tittle_ft);
  event_ft.appendChild(name_ft);
  event_ft.appendChild(location_ft);
  // console.log(tittle_ft);

  // links
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

let arrow_left = document.getElementById('slider_arrow_left');
let arrow_right = document.getElementById('slider_arrow_right');
let container_slider = document.getElementById('container_slider');
let imagenes = [
  'img/bg-event.jpeg',
  'img/bg-event-2.jpg',
  'img/bg-event-3.jpeg',
  'img/bg-event-4.jpeg',
  'img/bg-event-5.jpeg',
];
let i = 0;
let o = 0;

arrow_right.addEventListener('click', siguiente);
function siguiente() {
  if (i > imagenes.length - 1) i = 0;
  document.foto.src = imagenes[i];
  i++;
}
siguiente();

arrow_left.addEventListener('click',anterior);
function anterior() {
  i--;
  if (i > imagenes.length - 1) i = 0;
  document.foto.src = imagenes[i];
}
anterior();
