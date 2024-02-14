function printDeckOfCards(cards) {
    function createCard() {
        let result = [];
        for (let card of cards) {
            let face = "";
            let suit = "";
            let cards = {
                faces: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
                suits: ["S", "H", "D", "C"],
                prints: function() {
                    return `${face}${format[suit]}`;
                }
            }
            let format = {
                S: "\u2660",
                H: "\u2665",
                D: "\u2666",
                C: "\u2663"
            }
            if (card.includes("10")) {
                suit = card.split("10")[1];
                face = card.split(suit)[0];
                face = face.toUpperCase();
                suit = suit.toUpperCase();
            } else {
                face = card.split("")[0];
                suit = card.split("")[1];
                face = face.toUpperCase();
                suit = suit.toUpperCase();
            }
            if (!(cards.faces.includes(face)) || !(cards.suits.includes(suit))) {
                console.log(`Invalid card: ${card}`);
                return;
            }
            result.push(cards.prints());
        }
        return result;
    }
    let cardDeck = createCard();
    if (!Array.isArray(cardDeck)) {
        return;
    }
    console.log(cardDeck.join(" "));
}