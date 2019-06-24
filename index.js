// document.addEventListener("click", turn);
// function turn(e) {
//   var card = document.querySelector(".cardHidden");
//   console.log(one);
//   card.classList.replace("cardHidden", "cardDeck");
// }

var cards = document.getElementsByClassName("cardHidden");
var cardsArray = Array.from(cards);
var i = 0;

for (i; i < cardsArray.length; i++) {
  cardsArray[i].addEventListener("click", turn);
}

function turn() {
  console.log(cardsArray[i]);
  i.style.background = "green";
}
