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
  event.path[0].className = "cardDeck";
}

function randomize() {
  alert("pics will be randomized");
}
