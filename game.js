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
    isLocked: false,
    firstCard: null,
    secondCard: null,
    setCard: function (id) {
        let card = this.getCardById(id);

        if (card.flipped || this.isLocked) {
            return false;
        }

        if (this.firstCard === null) {
            this.firstCard = card;
            return true;
        } else{
            this.secondCard = card;
            this.isLocked = true;

            return true;
        }
    },
    getCardById: function (id) {
        return this.cards.filter(card => card.id == id)[0];
    },
    checkPair: function () {
        if(this.firstCard === null || this.secondCard === null){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },
    clearPair: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.isLocked = false;
    },
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