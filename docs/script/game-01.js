const opponentArea = document.querySelector('.opponent-card');
const opponentDeck = ['Particle','Device','Concept'];

let opponentCardType;

let playerCardContent = playerCard.children[1];
let playerCardContentType = playerCardContent.children[1];

let playerCardType = playerCardContentType.innerHTML;

function chooseRndmCard() {
    let max = opponentDeck.length;
    let cardIndex = Math.floor(Math.random() * Math.floor(max));
    opponentCardType = opponentDeck[cardIndex];
}

function compareCards() {
    if (playerCardType === opponentCardType) {
        alert('DRAW');
    } else if (playerCardType === "Particle") {
        if (opponentCardType === "Concept") {
            alert('YOU WIN!');  
        } else {
            alert('YOU LOOSE!');
        }
    } else if (playerCardType === "Device") {
        if (opponentCardType === "Particle") {
            alert('YOU WIN!');  
        } else {
            alert('YOU LOOSE!');
        }
    } else if (playerCardType == "Concept") {
        if (opponentCardType === "Device") {
            alert('YOU WIN!');  
        } else {
            alert('YOU LOOSE!');
        }
    } 
}