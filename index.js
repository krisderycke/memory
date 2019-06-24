let cards = document.getElementsByClassName("cardDeck");

cards.addEventListener("click", turn);

function turn() {
  cards.style.background = "red";
}
