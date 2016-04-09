

var config = require('../../config/config.js');
var User = require('mongoose').model('User');
var passport = require('passport');

// Define a middleware function to be used for every secured routes
var auth = function(req, res, next){
  if (!req.isAuthenticated()) 
    res.send(401);
  else
    next();
};

var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
        case 11000:
        case 11001:
            message = 'Username already exists';
            break;
        default:
            message = 'Something went wrong';
        }
        console.log(message + err);
     } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        } 
        console.log(err);
    }
    return message;
};

exports.signup = function (req, res) {

	var user = new User(req.body);
    var message = null;
    user.provider = 'local';

	user.save(function (err) {
        if (err) {
            var message = getErrorMessage(err);
            res.statusCode = 400;
            res.json(message);
        } else {
            res.statusCode = 200;
            res.json(user);
        }
    });
};

exports.loginSuccess = function (req, res) {
    res.statusCode = 200;
    res.json("authenticated");
}

exports.loginFailure = function (req, res) {
    res.statusCode = 401;
    res.json("user not found");
}


exports.signout = function(req, res) {
     req.logout();
     res.redirect('/');
};




