import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { tamagotchi } from './Tamagotchi.js';


$(document).ready(function() {
  let egg = tamagotchi;
  $("form#start").submit(function(event) {
    $("form#start").hide();
    $("#myTamagotchi").show();
    $("#actionButtons").show();

    event.preventDefault();

    egg.name = $("#nameInput").val();
    egg.setHunger();
    egg.setHappiness();
    egg.setSleep();
    egg.setAge();
    let run = setInterval(function() {
      $("#name").text(egg.name);
      $("#foodLevel").text(egg.displayHunger());
      $("#happinessLevel").text(egg.displayHappiness());
      $("#sleepLevel").text(egg.displaySleep());
      $("#age").text(egg.age);
      egg.isSick ? $("#sick").show() : $("#sick").hide();
      egg.isRestless ? $("#restless").show() : $("#restless").hide();
      egg.isGone ? $("#gone").show() : $("#gone").hide();
      egg.isAsleep ?
      ($("#asleep").show(), $("body").css("background-color", "black")) :
      ($("#asleep").hide(), $("body").css("background-color", "white"));
      egg.isPoopy ? $("#poopy").show() : $("#poopy").hide();
      egg.checkIfDead(run);
    }, 100);
  });

  $("#snack").click(function(){
    egg.feedSnack("snack");
  });

  $("#play").click(function(){
    egg.playLong("play");
  });

  $("#lightsOut").click(function(){
    egg.lightsOut();
  });

  $("#flush").click(function(){
    egg.flush();
  });

  $("#medicine").click(function() {
    egg.giveMedicine();
  });

  $("#hatch").click(function() {
    location.reload();
    // egg.newTamagotchi("New Tamagotchi");
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
