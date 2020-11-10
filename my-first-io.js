const fs = require('fs');

let lines = fs.readFileSync(process.argv[2]);
let numberLines = (lines.toString().split('\n').length)-1;

console.log(numberLines);