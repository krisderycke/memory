// i have to select every div in my html file.(document.getElemantsByClassName)
// put all the element in an Array (push)
// (for each) value of my array i have to compare 2 of them.

// (if) those value are the same then => "verify the value of the classname"
// every pair of divs should have a classname (.catN)

window.addEventListener("load", randomize);

//adding click event on all divs with same classname

let cards = document.getElementsByClassName("cardHidden");
let cardsArray = Array.from(cards);

let pics = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"];
// let picsDouble = pics.concat(pics);
// console.log(picsDouble); //equal quantity of elements in array of divs and araay of pics

// for (let i = 0; i < cardsArray.length; i++) {//
//   cardsArray[i].addEventListener("click", function() {
//     turn(event);
//     console.log("click");
//   });//

// function turn(event) {
//   var card = event.path[0];
//   card.className = randomPics;
// }
//}

//start randomize function
function randomize() {
  for (let i = 0; i <= cardsArray.length; i++) {
    var picsRandom = [Math.floor(Math.random() * cardsArray.length)];
    console.log(picsRandom);

    // console.log(cardsArray[i].classList.remove("cardHidden"));
    // console.log(cardsArray[i].classList.add(picsDoubleRandom));
  }
}
