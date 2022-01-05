const CARD = "card";
const FRONT = "card_front";
const BACK = "card_back";
const ICON = "icon";
const BACK_ICON = "backIcon";
const FLIP = "flip";

startGame();

function startGame() {
    game.createCards();
    initializeCards(game.cards);
}

function initializeCards(cards) {
    let gameBoardElement = document.getElementById("gameBoard");

    cards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);
        cardElement.addEventListener("click", flipCard);

        gameBoardElement.appendChild(cardElement);
    });
}

function createCardContent(card, element) {
    createCardFace(FRONT, card, element);
    createCardFace(BACK, card, element);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);

    let iconElement = document.createElement("img");

    if (face == FRONT) {
        iconElement.classList.add(ICON);
        iconElement.src = `./images/pokemon/${card.icon}.png`;

    } else {
        iconElement.classList.add(BACK_ICON);
        iconElement.src = "./images/pokemon/pokeball.png";
    }

    cardElementFace.appendChild(iconElement);

    element.appendChild(cardElementFace);
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add(FLIP);
        game.getCardById(this.id).flipped = true;

        if (game.checkPair()) {
            game.clearPair();
        } else if(game.secondCard !== null){
            setTimeout(() => {
                let firstCardElement = document.getElementById(game.firstCard.id);
                let secondCardElement = document.getElementById(game.secondCard.id);

                unflipCard(firstCardElement);
                unflipCard(secondCardElement);

                game.clearPair();
            }, 1000);
        }
    }

}

function unflipCard(cardElement) {
    game.getCardById(cardElement.id).flipped = false;
    cardElement.classList.remove(FLIP);
}