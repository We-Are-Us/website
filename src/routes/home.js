const { getTemplate } = require('../getTemplate');
const { getHomePageContent } = require('../content');
const ImageSet = require('../content/image-set');

const template = getTemplate('home');

module.exports = async (_req, res) => {
    const heroImageSet = new ImageSet('//images.ctfassets.net/xu4zh386cjva/3Aq8URB5vQQNdc52rouoeL/e7d22f85ceb279933b772a9c38e5a79a/header_images_mobile.jpg', {
        sm: '//images.ctfassets.net/xu4zh386cjva/3Aq8URB5vQQNdc52rouoeL/e7d22f85ceb279933b772a9c38e5a79a/header_images_mobile.jpg',
        md: '//images.ctfassets.net/xu4zh386cjva/6WffLJOGg3u6x89oVe7E2X/f3ddea25cbb5ac4ce6a443ffcb047b3d/header_image_desktop.jpg',
        lg: '//images.ctfassets.net/xu4zh386cjva/6WffLJOGg3u6x89oVe7E2X/f3ddea25cbb5ac4ce6a443ffcb047b3d/header_image_desktop.jpg'
    });

    const content = await getHomePageContent();
    const { heroHeader, heroText } = content.fields;

    res.type('html');

    console.log('sm', heroImageSet.sm);

    const html = template({
        heroImageSet,
        heroHeader,
        heroText
    });
    
    res.html(html);
};