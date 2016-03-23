process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Running in requirement: ' + process.env.NODE_ENV);
// Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var http = require('http');
var db = mongoose();
var app = express(db);
var fs = require('fs');
var serveStatic = require('serve-static');

// var options = {
//     key: fs.readFileSync('./certs/key.pem'),
//     cert: fs.readFileSync('./certs/cert.pem')
// };

app.use('/', serveStatic('.'));


//https.createServer(options, app).listen(3000);

http.createServer(app).listen(3000);

console.log('Server running at https://localhost:3000/');
