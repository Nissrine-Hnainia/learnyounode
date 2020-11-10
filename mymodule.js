const fs = require('fs')
const path = require('path')
module.exports = function (directory, ext, callback) {
fs.readdir(directory, function (err, files) {
if (err) {
    return callback(err)
    }
files = files.filter(function (folder) {
return path.extname(folder) === '.' + ext
})
callback(null, files)
})
}