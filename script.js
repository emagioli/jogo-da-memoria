const CARD = "card";
const FRONT = "card_front";
const BACK = "card_back";
const ICON = "icon";
const BACK_ICON = "backIcon";

var pokemons = [
    "abra",
    "bulbasaur",
    "charmander",
    "ditto",
    "gengar",
    "mew",
    "mewtwo",
    "pikachu",
    "snorlax",
    "squirtle"
];

let cards = null;

startGame();

function startGame() {
    cards = createCards(pokemons);
    shuffleCards(cards);
    initializeCards(cards);
}

function shuffleCards(cards) {
    currentIndex = cards.length;
    randomIndex = 0;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [[cards[randomIndex]], [cards[currentIndex]]] = [[cards[currentIndex]], [cards[randomIndex]]];
    }
}

function initializeCards(cards){
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

function createCardContent(card, element){
    createCardFace(FRONT, card, element);
    createCardFace(BACK, card, element);
}

function createCardFace(face, card, element){
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

function createCards(pokemons) {
    let cards = [];

    for (let pokemon of pokemons) {
        cards.push(createPair(pokemon));
    }

    return cards.flatMap(pair => pair);
}

function createPair(pokemon) {
    return [{
        id: generateId(pokemon),
        icon: pokemon,
        flipped: false
    }, {
        id: generateId(pokemon),
        icon: pokemon,
        flipped: false
    }];
}

function generateId(pokemon) {
    return pokemon + parseInt(Math.random() * 1000);
}


function flipCard() {
    if (!isFlipped(this)) {
        this.classList.add("flip");
    } else {
        this.classList.remove("flip");
    }

}

function isFlipped(card) {
    return card.classList.contains("flip");
}