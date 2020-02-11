
let cards= ['queen', 'king','queen', 'king'];

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
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
checkForMatch();
}

flipCards(cards[0], cards[1]);
