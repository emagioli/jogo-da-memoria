const FRONT = "card_front";
const BACK = "card_back";

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
    console.log(cards);
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


function flipCard(card) {
    if (!isFlipped(card)) {
        card.classList.add("flip");
    } else {
        card.classList.remove("flip");
    }

}

function isFlipped(card) {
    return card.classList.contains("flip");
}