const FRONT = "card_front";
const BACK = "card_back";

var techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react"
];

createCards(techs);

function createCards(techs) {
    let cards = [];

    for (let tech of techs) {
        cards.push(createPair(tech));
    }

    console.log(cards.flatMap(pair => pair));
}

function createPair(tech) {
    return [{
        id: generateId(tech),
        icon: tech,
        flipped: false
    }, {
        id: generateId(tech),
        icon: tech,
        flipped: false
    }];
}

function generateId(tech) {
    return tech + parseInt(Math.random() * 1000);
}


// function flipCard(card) {
//     if (!isFlipped(card)) {
//         card.classList.add("flip");
//     } else {
//         card.classList.remove("flip");
//     }

// }

// function isFlipped(card) {
//     return card.classList.contains("flip");
// }