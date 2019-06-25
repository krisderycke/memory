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
  var pics = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"];
}
