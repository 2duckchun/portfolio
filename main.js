const path = require('path')
const pug = require('pug');
const puggy = path.join(__dirname, 'views/layout.pug');

console.log(pug.renderFile(puggy, {
    name: '2DC',
}));