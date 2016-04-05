var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compress = require('compression');
var session = require('express-session');
var passport = require('passport');

module.exports = function () {
    var app = express();

    process.on('uncaughtException', function (err) {
        console.log(' UNCAUGHT EXCEPTION ');
        console.log('[Inside "uncaughtException" event] ' + err.stack || err.message);
    });

    // Test if Env is in development mode
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        app.locals.pretty = true;
    } else {
        app.use(compress());
    }

    // Persist sessions with mongoStore
    // We need to enable sessions for passport twitter because its an oauth 1.0 strategy
    app.use(session({
        secret: 'hbfbkwjfgz § o9d',
        resave: true,
        saveUninitialized: true
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.text({type: 'text/plain'}));

    app.use(passport.initialize());
    app.use(passport.session());

    // Define a middleware function to be used for every secured routes
    var isAuthenticated = function(req, res, next){
        if (!req.isAuthenticated()) 
            res.sendStatus(401);
        else
            next();
    };

    require('../app/routes/user-routes.js')(app, isAuthenticated);
    require('../app/routes/image-routes.js')(app, isAuthenticated);
    require('../app/routes/appService-routes.js')(app, isAuthenticated);

    return app;
};
