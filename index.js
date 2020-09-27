var http = require('http')

var server = http.createServer(function(req, res) {
    console.log(`Request: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plane'})
    res.end("I now know how is this working")
})

server.listen(5000, '127.0.0.1');
console.log('listning to port 5000 on localhost 127.0.0.1')