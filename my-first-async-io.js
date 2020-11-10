const fs = require('fs');

let file = process.argv[2];
fs.readFile(file, function(err, lines) {
    let numberLines = (lines.toString().split('\n').length)-1
    console.log(numberLines);
});