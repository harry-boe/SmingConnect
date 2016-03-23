var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {

	// open db connection
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("We are connected to mongodb://localhost/test");
    });

    
    require('../app/models/users.js');

    return db;
};
