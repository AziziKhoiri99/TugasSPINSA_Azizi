var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile('./assets/home.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url == '/profil') {
        fs.readFile('./assets/profil.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url == '/blog') {
        fs.readFile('./assets/blog.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url == '/library') {
        fs.readFile('./assets/library.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url == '/digitalmarketing') {
        fs.readFile('assets/digital-marketing.pdf', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'application/pdf' });
            res.write(data);
            res.end();
        })
    } else {
        res.end('404 Not Found')
    }
}).listen(8080, '0.0.0.0');
console.log('Server telah berjalan.');