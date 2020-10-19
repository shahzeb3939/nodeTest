var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
    console.log(`Request: ${req.url}`)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./about.html').pipe(res);
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./contactPage.html').pipe(res)
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('./errorPage.html').pipe(res);
    }
})

server.listen(5000, '127.0.0.1', () => {
    console.log('listning to port 5000 on localhost 127.0.0.1')
});
