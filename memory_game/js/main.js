var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];

var checkForMatch = function () {
	document.getElementById('game-board').setAttribute('cards', 'cardImage')
	  if (cardsInPlay[0] !== cardsInPlay[1]) {
      console.log('You found a match!');
  } else {
      alert("Sorry, try again.");
  }}
checkForMatch();
var flipCard = function () {
	document.getElementById('game-board');
	console.log('User flipped ' + cards[cardsId].rank);
	cardsInPlay.push('User flipped ' + cards[cardsId].rank);
	console.log(cards[cardsId].cardImage);
	console.log(cards[cardsId].suit);
 }
 var createBoard = function () {
 	  for (var i = 0; i < cards.length; i += 1) {
 	  	var cardElement = document.createElement('img');
 	  	cardElement.setAttribute('src', 'images/back.png');
 	  	cardElement.className = 'cards' + i;
    	document.getElementById('game-board').appendChild(cardElement);
 	  	document.getElementsByTagName('img')[0].addEventListener('click', flipCard);
  }

 }
createBoard();

//Hint #2: Just as we did in the last step, we can use the `this` keyword to access the element the user just clicked on. Except now instead of getting an attribute, we want to _set_ the `src` attribute.

//Hint #3: We'll want to make sure that there are _no quotation marks_ surrounding the new value of the `src` attribute (cards[cardId].cardImage) when we use the `setAttribute()` method.




