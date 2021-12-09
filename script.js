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