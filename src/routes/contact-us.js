const { getTemplate } = require('../getTemplate');

const template = getTemplate('contact-us');

module.exports = (_req, res) => {
    const html = template({});

    res.html(html);
};
