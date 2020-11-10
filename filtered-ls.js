const fs = require('fs')
const path = require('path')

let file = process.argv[2];
let extension = '.' + process.argv[3]

fs.readdir(file, (err, list) => {
  if (err) console.error(err)
  list.forEach(function(item) {
      if (path.extname(item) === extension) {
          console.log(item)
      }
  })
})