
var cards = [
"queen","queen","king","king"
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

	console.log("User Flipped:" + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}

flipCard(0);

flipCard(2);

