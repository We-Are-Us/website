/**
 * @class Card
 */
class Card {
    /**
     * @constructor
     * @param {string} title 
     * @param {Image} image 
     * @param {Text} text 
     */
    constructor(title, image, text) {
        this.title = title;
        this.image = image;
        this.text = text;
    }
}

module.exports = Card;