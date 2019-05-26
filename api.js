const api = require('lambda-api')();
const { registerPartials } = require('./src/getTemplate');
const routes = require('./src/routes');

registerPartials();

routes.forEach(route => {
    const { url, handler } = route;

    api.get(url, handler);
});

module.exports.handler = async (event, context, callback) => {
    try {
        await api.run(event, context, callback);
    } catch (err) {
        context.fail(err);
    }
};
