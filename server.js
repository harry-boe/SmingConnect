process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Running in requirement: ' + process.env.NODE_ENV);
// Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var http = require('http'),
	db = mongoose(),
	app = express(db),
    passport = passport(),
	session = require('express-session'),
    cookieParser = require('cookie-parser'),
    lusca = require('lusca'),
	serveStatic = require('serve-static');


//this or other session management will be required
app.use(session({
    secret: 'go4sming',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());

app.use(lusca({
    csrf: { angular: true },
    csp: { /* ... */},
    xframe: 'SAMEORIGIN',
    p3p: 'SMING',
    hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
    xssProtection: true
}));

// var options = {
//     key: fs.readFileSync('./certs/key.pem'),
//     cert: fs.readFileSync('./certs/cert.pem')
// };

app.use('/', serveStatic('.'));


//https.createServer(options, app).listen(3000);

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000/');
