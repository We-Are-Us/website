const { flatten } = require('lodash');
const { getTemplate } = require('../getTemplate');
const { getHomePageContent } = require('../content');
const ImageSet = require('../content/image-set');
const Card = require('../content/card');
const Text = require('../content/text');
const Image = require('../content/image');
const features = require('../features');

const template = getTemplate('home');

module.exports = async (_req, res) => {
    const heroImageSet = new ImageSet('//images.ctfassets.net/xu4zh386cjva/3Aq8URB5vQQNdc52rouoeL/e7d22f85ceb279933b772a9c38e5a79a/header_images_mobile.jpg', {
        sm: '//images.ctfassets.net/xu4zh386cjva/3Aq8URB5vQQNdc52rouoeL/e7d22f85ceb279933b772a9c38e5a79a/header_images_mobile.jpg',
        md: '//images.ctfassets.net/xu4zh386cjva/6WffLJOGg3u6x89oVe7E2X/f3ddea25cbb5ac4ce6a443ffcb047b3d/header_image_desktop.jpg',
        lg: '//images.ctfassets.net/xu4zh386cjva/6WffLJOGg3u6x89oVe7E2X/f3ddea25cbb5ac4ce6a443ffcb047b3d/header_image_desktop.jpg'
    });

    const content = await getHomePageContent();
    const { heroHeader, heroText, leadText } = content.fields;

    const cards = content.fields.cards.map(card => {
        const { title, file: { url } } = card.fields.image.fields;

        const image = new Image(url, title);

        const text = flatten(card.fields.text.content
            .filter(content => content.nodeType === 'paragraph')
            .reduce((accumulator, current) => {
                accumulator.push(current.content
                    .filter(c => c.nodeType === 'text')
                    .map(c => c.value));

                return accumulator;
            }, [])
        );
        
        return new Card(card.fields.title, image, new Text(text));
    });

    res.type('html');

    // console.log('content', content);

    const html = template({
        heroImageSet,
        heroHeader,
        heroText,
        leadText,
        cards,
        features
    });
    
    res.html(html);
};