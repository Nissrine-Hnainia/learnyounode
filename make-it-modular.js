const path = require('path');
const mymodule = require('./mymodule');

let directory = process.argv[2];
let ext = process.argv[3];

let callback = function(err, files) {
    if (err) console.log(err);
    files.forEach(function(folder) {
        console.log(folder)
    });
};

mymodule(directory, ext, callback);