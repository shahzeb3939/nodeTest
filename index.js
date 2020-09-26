var fs = require('fs')

var readMeContent = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMeContent)
fs.writeFileSync('writtenFile.txt', readMeContent+' some more text')