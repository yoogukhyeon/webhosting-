const fs = require('fs');

fs.readFile('node.js/sample.txt', 'utf8', (err, data) => {
    console.log(data);

})