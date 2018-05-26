$(document).ready(function(){
  //WIKI APP JS code

  $('document').ready(function(){

$('#searchTerm').keypress(function(){
             console.log("SEAARRRRCCHHH");
            $('#searchButton').click();//Trigger search button click event
    });

$("#submitButton").on("click", function(event){
  console.log('Clicked');
  event.preventDefault();
  var searchTerm = $("#searchTerm").val();
  var url = "https://cors.io/?http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json" ;

  $.ajax({
    url: url,
    dataType: "json",
    async: false,
    success: function(data){
      console.log(data[1], searchTerm,'DATAATAA', url)
      $("#searchResults").html('');
      for(var i = 0; i < data[1].length; i++){
      $("#searchResults").append('<li><a target="_blank"' + 'href="' + data[3][i] + '"' + '>' + data[1][i] + '</a>' + '<p>' + data[2][i] + '</p></li>')

    }
    },
    error: function(error) {
      console.log(error, 'ERRRORR')
    }
  })


})

})

  ///WIKI END OF code


  //TIC TAC TOE JS code
  var outercontainer = document.getElementById("outer-container");
  var selectXO = document.getElementById("selectXO");
  var computer = document.getElementById("computer");
  var onePlayer = document.getElementById("player1");
  var twoPlayer = document.getElementById("player2");
  var selectPlayer = document.getElementById("selectPlayer");
  var playertwo = document.getElementById("playertwo");

  var x = document.getElementById("x");
  var o = document.getElementById("o");
  var reset = document.getElementById("reset-board");
  var gameArr = [];
  var playerArr = [];
  var computerArr = [];
  var player1Turn = true;
  var computerTurn = false;
  var count = 0;
  var boardArray = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];

  computer.style.display = "none";

    outercontainer.style.display = "none";
    selectXO.style.display = "none";

  var box = document.getElementsByClassName("box");

  //SELECT TYPE OF GAME

  onePlayer.addEventListener(
    "click",
    function() {
      console.log("ONE PLAYER");
      selectXO.style.display = "block";
      playertwo.style.display = "none";
      computer.style.display = "block";
      selectPlayer.style.display = "none";

      var xo = "";
      var ox = "";

      //SELECT X or O
      x.addEventListener(
        "click",
        function(x) {
          console.log("Xdeaf", x.path[0].id);
          outercontainer.style.display = "flex";
          selectXO.style.display = "none";
          xo = "x";
          ox = "o";
        },
        false
      );

      o.addEventListener(
        "click",
        function(o) {
          console.log("Xdeaf", o.path[0].id);
          outercontainer.style.display = "flex";
          selectXO.style.display = "none";
          xo = "o";
          ox = "x";
        },
        false
      );

      //Player 1 goes first
      if (player1Turn) {
        count++;
        for (var i = 0; i < box.length; i++) {
          box[i].addEventListener(
            "click",
            function(id) {
              document.getElementById(id.path[0].id).innerHTML = xo;
              if (gameArr.indexOf(id.path[0].id) === -1) {
                playerArr.push(id.path[0].id);
              }
              // console.log('count', gameArr, gameArr.length, computerTurn)
              if (count === 9) {
                gameArr = [];
                console.log("GAME IS OVER", gameArr);
                for (var i = 0; i < box.length; i++) {
                  document.getElementById(box[i].id).innerHTML = "";
                }
              }
              computerTurn = true;
              comp();
              gameArr = playerArr;
              console.log("PLAYER GAME ARR", gameArr, playerArr);
              winner();
            },
            false
          );

          //COMPUTER TURN
          function comp() {
            if (computerTurn === true) {
              var randomNum = Math.floor(Math.random() * 8) + 0;
              console.log("INSIDE COMPUTERS TURN", randomNum, count);
              if (gameArr.indexOf(boardArray[randomNum]) === -1) {
                setInterval(function() {
                  document.getElementById(box[randomNum].id).innerHTML = ox;
                }, 1000);
              }
              if (gameArr.indexOf(box[randomNum].id) === -1) {
                computerArr.push(box[randomNum].id);
              }

              player1Turn = true;
              computerTurn = false;
            }

            count++;
            gamerArr = computerArr;
            console.log("COMPUTER GAME ARR", gameArr, computerArr);
            winner();
          }

           //CHECKS IF WINNER
          function winner() {
             if(gameArr.indexOf('box1') !== -1 && gameArr.indexOf('box4') !== -1 && gameArr.indexOf('box7') !== -1){
             alert('YOU A WINNER')
           }
            if(gameArr.indexOf('box1') !== -1 && gameArr.indexOf('box2') !== -1 && gameArr.indexOf('box3') !== -1){
             console.log("YOU ARE THE WINNER!!!!")
           }
            if(gameArr.indexOf('box1') !== -1 && gameArr.indexOf('box5') !== -1 && gameArr.indexOf('box9') !== -1){
             console.log("YOU ARE THE WINNER!!!!")
           }
             if(gameArr.indexOf('box3') !== -1 && gameArr.indexOf('box6') !== -1 && gameArr.indexOf('box9') !== -1){
             console.log("YOU ARE THE WINNER!!!!")
           }
             if(gameArr.indexOf('box7') !== -1 && gameArr.indexOf('box8') !== -1 && gameArr.indexOf('box9') !== -1){
             console.log("YOU ARE THE WINNER!!!!")
           }
          }

        }
      }
    },
    false
  );

  //TWO PLAYER MODE
  twoPlayer.addEventListener(
    "click",
    function() {
      console.log("TWO PLAYER");
      selectXO.style.display = "block";
      selectPlayer.style.display = "none";
      computer.style.display = "none";
      playertwo.style.display = "block";
    },
    false
  );

  //RESET BUTTON
  reset.addEventListener(
    "click",
    function() {
      for (var i = 0; i < box.length; i++) {
        console.log("BOXXX", box[i].id);
        document.getElementById(box[i].id).innerHTML = "";
      }
      selectPlayer.style.display = "block";
      selectXO.style.display = "none";
      outercontainer.style.display = "none";
      gameArr = [];
    },
    false
  );
  //END OF TIC TAC CODE/////////////////

  $('.main_calculator').on("click", ".calculator-button" ,function(){
    console.log(this.id)
  })
  //JS CALULATOR CODE
  var storeArr = [];
  var expressionArr = [];
  var operatorPress = false;
  var callPercent = false;
$(".calculator-button").click(function(){

    var clicked = $(this);
    // do whatever with me
    //Stores values from button clicked
    var pressedValue = clicked.val();
    console.log(this.value, pressedValue)
    //Create variables that store update
    var result = '';
    var finalValue = '';
    var startCalc = 0;
    var test = 0;
    var operatorArr = ['*', '-', '+', '/', '%'];
    var numbers = ["0","1", "2","3","4","5","6","7","8","9"];

    //Cannot perform this action on calculator
    //Cannot click an operator twice in a row
    function invalidOperator() {

    }
    // expression = pressedValue;

    //CHECK TO MAKE SURE FIRST BUTTON PRESSED IS A NUMBER
    if(numbers.indexOf(pressedValue.substring(0,1)) !== -1 && expressionArr.length === 0){
      // if(parseInt(expression.substring(1,2)) > 0){
      //   console.log('INSIDE THE IF');
      //   expression = expression.substring(1,2);
      // }
      console.log('INSIDE FIRST PRESS')
      expressionArr.push(pressedValue);
      $("#screen-expression").append(pressedValue);
      operatorPress = true;
    }
    else if(expressionArr.length > 0 && operatorArr.indexOf(pressedValue) !== -1 && operatorPress){
      if(pressedValue === "%"){
        expressionArr.push("/100");
        finalValue = eval(expressionArr.join(""));
        $("#screen-value").html(finalValue);
        operatorPress = true;
      }
      else if(pressedValue !== "%"){
        expressionArr.push(pressedValue);
        operatorPress = false;
      }

      console.log("SECOND IF")
      $("#screen-expression").append(pressedValue);
    }
    else if(expressionArr.length > 0 && numbers.indexOf(pressedValue.substring(0,1)) !== -1){
      expressionArr.push(pressedValue);
      console.log("PRESSED 2nd", pressedValue)
      $("#screen-expression").append(pressedValue);
      operatorPress = true;
    }
    //CHECK IF 2nd BUTTON IS A DOT
    else if(expressionArr.length > 0 && pressedValue === "EQUAL"){
      finalValue = eval(expressionArr.join(""));
      $("#screen-value").html(finalValue);
      expression = '';
      console.log('EQUAL')
    }
    if(pressedValue === 'CE' && expressionArr.length > 0){

      finalValue = expressionArr.join("");
      console.log("CLEAAEERRRRRRRRRRRR", finalValue)
      var clearStr = finalValue.substring(0,finalValue.lastIndexOf("*")) || finalValue.substring(0,finalValue.lastIndexOf("-")) ||
      finalValue.substring(0,finalValue.lastIndexOf("/")) || finalValue.substring(0,finalValue.lastIndexOf("+"));
      console.log("CLEAR AAFEFAEFA", clearStr );
      expression = clearStr;
      finalValue = clearStr.split('');
      expressionArr = finalValue;
      $("#screen-expression").html(expression);
    }
    if(expressionArr.length === 0 && pressedValue === '.'){
      expression = 0;
      expression = expression + pressedValue;
      console.log('INSIDE DOT', expression)
      $("#screen-expression").html(expression);
    }
    //CLEAR EVERYTHING
    if(pressedValue === 'AC'){
      console.log("CLEAR AC")
       expression = '';
       expressionArr = [];
       $("#screen-expression").html(expression);
       $("#screen-value").html(0);
    }

    console.log("EXPRESSSIONNNNNN", expressionArr.length, expressionArr)
//         console.log(finalValue, 'FINAL')
//         $("#screen-value").html(finalValue)
});
// END OF CALCULATOR code



  // POMODORO JS CODE
  var sessionNumber = 25;
  var breakNumber = 5;

  //START AND STOP TIMER
  var sessionSetInt;
  var breakSetInt;
  var minToSec;
  var sessionTime;
  var pausedTime;
  var pressedCount = 0;
  var resetCount = 0;
  var endSession = 0;

  //HIDE BUTTONS
  $("#stop").hide();
  //BREAK SECTION
  $("#minus-break").on("click", function(){
    if(breakNumber > 1){
      breakNumber -= 1;
      $("#break-count").html(breakNumber);
    }
  });
  $("#add-break").on("click", function(){
    breakNumber += 5;
    $("#break-count").html(breakNumber)
  });
  //SESSION SECTION
  $("#minus-session").on("click", function(){
    if(sessionNumber > 1){
      sessionNumber -= 1;
      pressedCount = 0;
    $("#session-count").html(sessionNumber);
    $("#countdown").html(sessionNumber);
    }
  });
  $("#add-session").on("click", function(){
    sessionNumber += 5;
    pressedCount = 0;
    $("#session-count").html(sessionNumber);
    $("#countdown").html(sessionNumber);
  });



  //START THE TIMER
  $("#start").on("click", function(){
    pressedCount++;
    resetCount = 0;
    $("#stop").show();
    $("#start").hide();
    if(pressedCount === 1){
      minToSec = sessionNumber * 60;
      console.log(pressedCount, 'FIRST')
    }
    else if (pressedCount > 1){
      minToSec = pausedTime;
      console.log(pressedCount, 'SECOND')
    }
    sessionSetInt = setInterval(function(){
    minToSec--;
    var minutes = Math.floor(minToSec / 60);
    var seconds = minToSec - minutes * 60;
    // console.log('SECONDS', seconds)
    if(seconds <10 && seconds >= 0){
      seconds = "0" + seconds;
    }
    sessionTime = minutes + ":" + seconds;
    $("#countdown").html(sessionTime);
    pausedTime = minToSec;
     // RUN BREAK SESSION AFTER MAIN SESSION IS OVER
    if(minToSec === 0 && endSession === 0){
      alarm();
      function alarm (){
        $("#alarm").trigger("play");
      }

      $("#session-title").html("BREAK");
      minToSec = breakNumber * 60;
      endSession = 1;
      console.log("INSIDE DONE", minToSec)
      // clearInterval(sessionSetInt);

      // breakTime();

    }
    if(minToSec === 0 && endSession === 1){
      $("#session-title").html("SESSION");
      minToSec = sessionNumber * 60;
      endSession = 0;
    }

  }, 1000);
    function breakTime () {
       breakSetInt = setInterval (function(){

      }, 1000);
    }
  });
  //STOP THE TIMER
  $("#stop").on("click", function(){
    clearInterval(sessionSetInt);
    $("#start").show();
    $("#stop").hide();
    console.log("stopped");
    resetCount = 1;
  });
  //RESET BUTTON SET BREAK TO 5 AND SESSION TO 25
  $("#reset").on("click", function(){
    if(resetCount === 1) {
      sessionNumber = 25;
      breakNumber = 5;
      pressedCount = 0;
      $("#countdown").html(sessionNumber);
      $("#break-count").html(breakNumber);
      $("#session-count").html(sessionNumber);
    }
  });
  // END OF POMODORO JS CODE


  //TWITCH APP JS CODE
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
$('#nextOpen,#nextOpen2').click(
  function openCity() {
      // Declare all variables
      var i, tabcontent, tablinks;
      console.log("OPEN CITY CLICKEDDDFKANFNKANFKNFKEJNNFKAN", this.value)
      // Get all elements with class="tabcontent" and hide them

      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
     // console.log(tabcontent.length, "TAB LENGTH", cityName);

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the link that opened the tab
      document.getElementById(this.value).style.display = "block";
      evt.currentTarget.className += " active";
      var online = "Online";
      var offline = "Offline";
      if(this.value === 'All'){
        $(".tabcontent").html('');
        channels.map(function(channelName){
          //RUN ALL RESULTS

          $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + channelName)
          .then(function(data) {
            console.log('IS THIS FIRST?',channelName );
          $("#All").append(
            '<div class="all-container"><img src="' +  data.logo + '"' + 'alt="No Image" height="30"            width="30">' + '<h3 class="all-title">' + '<a class="link" target="_blank"' + 'href="' + data.url + '">' + data.name + '</a></h3><p class="status">' + offline + "</p></div>"
          );
          });


          //RUN OFFLINE RESULTS

          $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + channelName)        .then(function(data){
         console.log('IS THIS 2nd?', channelName)
        if(data.stream === null){
          $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + channelName)
          .then(function(data){
            // console.log("DATA", channelName, data)

          $("#Offline").append('<div class="all-container">' + '<img src="' +  data.logo + '"' + 'alt="No Image" height="30" width="30">' + '<h3 class="all-title">' + '<a class="link" target="_blank"' + 'href="' + data.url + '">' + data.name + '</a></h3><p class="status">' + offline + "</p></div>")
          })

        }
        else {
          console.log("INSIDE ONLINE", data)

              $("#Online").append('<div class="all-container">' + '<img src="' +  data.stream.channel.logo + '"' + 'alt="No Image" height="30" width="30">' + '<h3 class="all-title">' + '<a class="link" target="_blank"' + 'href="' + data.stream.channel.url + '">' + data.stream.channel.name + "</a></h3>" + '<p class="status">' + offline + "</p></div>" + "<p class='live_status'>" + data.stream.channel.status + "</p>");

  $("#Online .all-container").css("border-bottom", "none");     $(".status").html("Online").css("color", "green");
            }
      });
          //END OF MAP
        });


  }

});
      document.getElementById("defaultOpen").click(openCity());






})
