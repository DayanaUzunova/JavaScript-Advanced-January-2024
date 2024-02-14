function playingCards(face, suit) {
    face = face.toUpperCase();
    suit = suit.toUpperCase();
    let format = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    }
    let cards = {
        faces: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
        suits: ["S", "H", "D", "C"],
        toString: function() {
            return `${face}${format[suit]}`;
        }
    }
    if (!(cards.faces.includes(face))) {
        throw new Error("Invalid face!");
    } else if (!(cards.suits.includes(suit))) {
        throw new Error("Invalid suit!");
    }
    return cards;
}