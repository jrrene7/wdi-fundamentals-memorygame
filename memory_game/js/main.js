var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }}
checkForMatch();
var flipCard = function (cardsId) {
	console.log("User flipped " + cards[cardsId]);
	cardsInPlay.push("User flipped " + cards[0]);
 }
flipCard(0);
flipCard(2);