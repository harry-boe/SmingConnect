

var config = require('../../config/config.js');
var Account = require('mongoose').model('Account');
var Crypto = require('crypto');
var sha256 = require('js-sha256').sha256;



exports.create = function (req, res) {
	var usersalt = Crypto.randomBytes(64).toString('base64');
	req.body.usersalt = usersalt;
	req.body.password = sha256(req.body.password + usersalt);

	var account = new Account(req.body);

	account.save(function (err) {
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
            	res.json(account);
            }         
    });
};



