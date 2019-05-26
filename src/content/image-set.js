class ImageSet {
    constructor(imageUrl, breakpoints = {}) {
        this._xs = imageUrl;
        this._sm = breakpoints.sm;
        this._md = breakpoints.md;
        this._lg = breakpoints.lg;
        this._xl = breakpoints.lg;
    }

    get xs() {
        return this._xs;
    }

    get sm() {
        if (!this._sm) {
            return this.md;
        }

        return this._sm;
    }

    get md() {
        if (!this._md) {
            return this.lg;
        }

        return this._md;
    } 

    get lg() {
        if (!this._lg) {
            return this.xl;
        }

        return this._lg;

    }

    get xl() {
        if (this._xl) {
            return this._xl;
        }

        if (this._lg) {
            return this._lg;
        }

        if (this._md) {
            return this._md;
        }

        if (this._sm) {
            return this._sm;
        }

        if (this._xs) {
            return this._xs;
        }
    }
}

module.exports = ImageSet;

