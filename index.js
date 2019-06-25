window.addEventListener("load", randomize);

//adding click event on all divs with same classname
var cards = document.getElementsByClassName("cardHidden");
var cardsArray = Array.from(cards);
var i = 0;

for (i; i < cardsArray.length; i++) {
  cardsArray[i].addEventListener("click", function() {
    turn(event);
  });
}

function turn(event) {
  var card = event.path[0];
  card.className = "cardDeck";
}

function randomize() {
  console.log("pics will be randomized");
  picArray= [./assets/pics/cat1.jpg, ./assets/pics/cat2.jpg,./assets/pics/cat3.png,./assets/pics/cat4.jpg,./assets/pics/cat5.jpg,./assets/pics/cat6.jpg,./assets/pics/cat7.jpg]
}
