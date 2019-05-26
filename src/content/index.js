const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getHomePageContent = async () => {
    const query = {
        // contentType: 'homePage'
    };

    try {
        const entry = await client.getEntry('3xXYg6QSR0zJmEYzHJcdoB');
    
        return entry;
    } catch (e) {
        console.error(e.message);
        throw e;
    }
};

module.exports = {
    getHomePageContent
};