const { fstat } = require('fs')
var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
    console.log(`Request: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/html'})
    var myReadStream = fs.createReadStream(__dirname+'/index.html');
    myReadStream.pipe(res)
})

server.listen(5000, '127.0.0.1');
console.log('listning to port 5000 on localhost 127.0.0.1')