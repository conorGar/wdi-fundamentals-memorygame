
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

var cardsInPlay=[];

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You Found A Match!");
		}else{
			alert("Sorry, try again!");

		}
	}
}


function flipCard(cardId){

	console.log("User Flipped:" + cards[cardId].rank);
	console.log("User Flipped:" + cards[cardId].suit);
	console.log("User Flipped:" + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
}

flipCard(0);

flipCard(2);

