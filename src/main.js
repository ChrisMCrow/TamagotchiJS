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
});
