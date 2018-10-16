import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { tamagotchi } from './Tamagotchi.js';

$(document).ready(function() {
  let egg = tamagotchi;
  $("#hunger").text(egg.foodLevel);
  $("form#feed").submit(function(event) {
    event.preventDefault();
    egg.foodLevel = 50;
    $("#hunger").text("hello");
  });
  // $.ajax({
  //   url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=digimon`,
  //   type:'Get',
  //   data: {
  //     format: 'json'
  //   },
  //   success: function(response) {
  //     $('#myTamagotchi').prepend(`<img src=${response.data[1].images.original.url} />`);
  //   },
  //   error: function() {
  //     alert("error!");
  //   }
  // });
});
