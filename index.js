const { fstat } = require('fs')
var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')

var count = 0;
myReadStream.on('data', (chunk)=>{
    myWriteStream.write(chunk);
    count+=1;
    console.log(`${count} chunck written`)
})

// var server = http.createServer(function(req, res) {
//     console.log(`Request: ${req.url}`)
//     res.writeHead(200, {'Content-Type': 'text/plane'})
//     res.end("I now know how is this working")
// })

// server.listen(5000, '127.0.0.1');
// console.log('listning to port 5000 on localhost 127.0.0.1')