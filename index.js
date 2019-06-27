// i have to select every div in my html file.(document.getElemantsByClassName)
// put all the element in an Array (push)
// (for each) value of my array i have to compare 2 of them.

// (if) those value are the same then => "verify the value of the classname"
// every pair of divs should have a classname (.catN)

//adding click event on all divs with same classname

var div = document.getElementsByClassName("cardHidden");
var divs = Array.from(div);

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", turnCard);
}

function turnCard() {
  divs[1].className("cardDeck");
}
