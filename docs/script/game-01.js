let deck;
let card;
let cardDir;
let objective;

const Deck = function(deckTitle, deckDesc, deckId) {
    this.deckTitle = deckTitle;
    this.deckDesc = deckDesc;
    this.deckId = deckId;
}

const Objective = function(objName, objType) {
    this.objName = objName;
    this.objType = objType;
}

const Card = function(cardName, cardType, cardText, cardId) {
    this.cardName = cardName;
    this.cardType = cardType;
    this.cardText = cardText;
    this.cardId = cardId;
}

const CardDirectory = function(cardIdList) {
    this.cardIdList = cardIdList;
}