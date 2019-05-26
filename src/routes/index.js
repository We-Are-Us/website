const home = require('./home');
const contactUs = require('./contact-us');

module.exports = [
    {
        url: '/',
        handler: home
    },
    {
        url: 'contact-us',
        handler: contactUs
    } 
];