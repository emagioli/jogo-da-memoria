let game = {
    pokemons: [
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
    ],
    cards: null,
    createCards: function () {
        this.cards = [];

        for (let pokemon of this.pokemons) {
            this.cards.push(this.createPair(pokemon));
        }

        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
    },
    createPair: function (pokemon) {
        return [{
            id: this.generateId(pokemon),
            icon: pokemon,
            flipped: false
        }, {
            id: this.generateId(pokemon),
            icon: pokemon,
            flipped: false
        }];
    },
    generateId: function (pokemon) {
        return pokemon + parseInt(Math.random() * 1000);
    },
    shuffleCards: function () {
        currentIndex = this.cards.length;
        randomIndex = 0;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [[this.cards[randomIndex]], [this.cards[currentIndex]]] = [[this.cards[currentIndex]], [this.cards[randomIndex]]];
        }
    }
}