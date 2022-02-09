const fs = require('fs')

const background = document.querySelector('#background');

fs.readFile('src/background', 'utf8', (err, data) => {
    console.log(data);
});
