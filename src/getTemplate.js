const { readdirSync, readFileSync } = require('fs');
const Handlebars = require('handlebars');

const viewsPath = `${__dirname}/../views`;

const registerPartials = () => {
    readdirSync(viewsPath)
        .filter(path => path.startsWith('_'))
        .forEach(partialPath => {
            const name = partialPath.substr(1, partialPath.length - 5);
            const source = readFileSync(`${viewsPath}/${partialPath}`, { encoding: 'utf8' });

            Handlebars.registerPartial(name, source);
        });
};

const getTemplate = name => {
    const source = readFileSync(`${viewsPath}/${name}.hbs`, { encoding: 'utf8' });
    const template = Handlebars.compile(source);

    return template;
};

module.exports = {
    registerPartials,
    getTemplate
};
