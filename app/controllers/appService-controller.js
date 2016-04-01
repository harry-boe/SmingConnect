

var config = require('../../config/config.js');
var AppService = require('mongoose').model('AppService');



exports.create = function (req, res) {

	var appService = new AppService(req.body);

	appService.save(function (err) {
		if (err) {
			switch (err.name) {
			case 'MongoError':
                //11000 Error on MongoDB
                if (err.code === 11000) {
                	res.statusCode = 400;
	                console.log("MongoError " + err.errmsg);
                	res.json(err);
                }
                break;
            case 'ValidationError':
                res.statusCode = 400;
                console.log("ValidationError " + err);
                res.json(err);
                break;
            default:
                res.statusCode = 500;
                res.json(err);
                break;
                }
            } else {
            	res.statusCode = 200;
            	res.json(appService);
            }         
    });
};



