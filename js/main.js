
const cards= [
{
	rank: "queen",
	suit: "hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
	suit: "hearts",
	cardImage:"images/king-of-hearts.png"
},
{
rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];



let cardsInPlay=[];


function checkForMatch() {
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You have found a match");

//alert("You have found a match!");
}
else {
	console.log("Sorry, Try Again");
	//alert("Sorry, Try Again");
}
}
}

function flipCards(cardOne , cardTwo){

cardsInPlay.push(cardOne.rank);
cardsInPlay.push(cardTwo.rank);
console.log("User flipped " + cardOne.rank);
console.log(cardOne.cardImage);
console.log(cardOne.suit);
console.log("User flipped " + cardTwo.rank);
console.log(cardTwo.cardImage);
console.log(cardOne.suit);
checkForMatch();
}

flipCards(cards[0], cards[2]);
