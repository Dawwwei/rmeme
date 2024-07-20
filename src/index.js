const list = require('./list.js');

function generate() {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

module.exports = { generate };