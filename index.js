window.addEventListener("load", randomize);

//adding click event on all divs with same classname

let cards = document.getElementsByClassName("cardHidden");
let cardsArray = Array.from(cards);
let pics = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"];

for (let i = 0; i < cardsArray.length; i++) {
  cardsArray[i].addEventListener("click", function() {
    turn(event);
    console.log("click");
  });

  function turn(event) {
    var card = event.path[0];
    // card.className = randomPics;
  }
}

//start randomize function
function randomize() {
  let picsDouble = pics.concat(pics);
  console.log(picsDouble);

  // console.log("pics will be randomized");
  for (let i = 0; i <= picsDouble.length; i++) {
    cardsArray[i].className = Math.floor(Math.random() * picsDouble[i]);
  }
}
