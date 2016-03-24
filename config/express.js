var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compress = require('compression');

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

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.text({type: 'text/plain'}));

    require('../app/routes/account-routes.js')(app);

    return app;
};
