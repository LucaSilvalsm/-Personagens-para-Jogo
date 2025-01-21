let http = require('http');

// Create a server == criar servidor

http.createServer(function(req, res) {res.end("Bem vindo ao site")}).listen(8181)