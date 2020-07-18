




let DeckSelect = {
    setGameStart: function(deckId) {
        this.resetDeck(deckId);
        this.setStage();
        this.getHand();
    },
    resetDeck: function(deckId) {
        switch (deckId) {
            case "d-01":
                deck = new Deck(document.querySelector('.deck--1.title').textContent, document.querySelector('.deck--1.desc').textContent, deckId);
                cardDir = new CardDirectory ([]);
                break;
            case "d-02":
                deck = new Deck(document.querySelector('.deck--2.title').textContent, document.querySelector('.deck--2.desc').textContent, deckId);
                break;
            case "d-03":
                deck = new Deck(document.querySelector('.deck--3.title').textContent, document.querySelector('.deck--3.desc').textContent, deckId);
                break;
            case "d-04":
                deck = new Deck(document.querySelector('.deck--4.title').textContent, document.querySelector('.deck--4.desc').textContent, deckId);
                break;
            case "d-05":
                deck = new Deck(document.querySelector('.deck--5.title').textContent, document.querySelector('.deck--5.desc').textContent, deckId);
                break;
            default:
                console.log('error');
                break;
        }
    },
    setStage: function() {
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = "<main><h1>You Chose " + deck.deckTitle + "</h1> <div class='cards'><div class='card__wrapper'> <div class='card card--1'><img src='card-imgs/card-proton.png' alt='Proton Particle'><div class='card__content'><h2 class='card__name'>Proton</h2><h3 class='card__type'>Particle</h3><div class='card__text'><p>desc.</p></div></div></div> <div class='card card--2'><img src='card-imgs/card-muon.png' alt='Muon Particle'><div class='card__content'><h2 class='card__name'></h2><h3 class='card__type'></h3><div class='card__text'><p></p></div></div></div> <div class='card card--3'><img src='card-imgs/card-higgs.png' alt='Higgs Particle'><div class='card__content'><h2 class='card__name'></h2><h3 class='card__type'></h3><div class='card__text'><p></p></div></div></div> </div></div></main>";
    },
    getHand: function() {

    }
}