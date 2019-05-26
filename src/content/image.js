/**
 * @class Image
 */
class Image {
    /**
     * @constructor
     * @param {string} url 
     * @param {string} [altText='']
     */
    constructor(url, altText = '') {
        this.url = url;
        this.altText = altText;
    }
}

module.exports = Image;