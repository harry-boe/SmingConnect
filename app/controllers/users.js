var User = require('mongoose').model('User');
var ActivationMailer = require('../mailers/activation');
//var smsSender = require('../../config/twilo');
//var jade = require('jade');
//var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');
var http = require('http');
//var Crypto = require('crypto');
//  var sha256 = require('js-sha256').sha256;

/**
 * Create User
 * - Check if Errors happened
 * - Give back right Error message/ set error code
 * - Error Codes 201 -> OK
 *               400 -> ValidationError
 *               500 -> Every other Error
 * - In "err" is a JSON file(message,name,errors,..)
 * @param req
 * @param res
 */
exports.create = function (req, res) {
    var usersalt = Crypto.randomBytes(64).toString('base64');
    req.body.usersalt = usersalt;
    req.body.password = sha256(req.body.password + usersalt);

    var user = new User(req.body);

    user.save(function (err) {
        if (err) {
            switch (err.name) {
                case 'MongoError':
                    //11000 Error on MongoDB
                    if (err.code === 11000) {
                        res.statusCode = 400;
                        res.json(err);
                    }
                    break;
                case 'ValidationError':
                    res.statusCode = 400;
                    res.json(err);
                    break;
                default:
                    res.statusCode = 500;
                    res.json(err);
                    break;
            }
        } else {
            var postData = JSON.stringify({
                customerLogin: user.username,
                customerName: user.username,
                language: 'FR',
                email: user.email,
                phoneNumber: user.mobile,
                phoneNumberMobile: user.mobile,
                links: [{
                    rel: 'self',
                    href: 'http://10.10.36.29:8080/frontbanking/operating/rest/demodata/customers/create',
                    templated: false
                }]
            });

            var options = {
                hostname: '10.10.36.29',
                port: '8080',
                path: '/frontbanking/operating/rest/demodata/customers/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': postData.length
                }
            };

            var secureMobileReq = http.request(options, function (secureMobileRes) {
                secureMobileRes.setEncoding('utf8');

                secureMobileRes.on('data', function (chunk) {
                    // We need to listen to the "data" event or else the "end" event will not fire.
                });

                secureMobileRes.on('end', function () {
                    res.statusCode = 201;
                    res.send('User created!');
                });
            });

            req.on('error', function (e) {
                res.statusCode = 500;
                res.json(e);
            });

            // write data to request body
            secureMobileReq.write(postData);
            secureMobileReq.end();
        }
    });
};

/**
 * Userlogin
 * - Check if Errors happened
 * - Error Codes 200 -> OK
 *               404 -> User not found or wrong password
 *               500 -> Error reading user from db
 * @param req
 * @param res
 */
exports.login = function (req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';

    User.findOne({
            username: username
        },

        function (error, data) {
            if (error) {
                // error reading user from db
                res.statusCode = 500;
                res.end();
            } else if (!data) {
                // user not found
                res.statusCode = 404;
                res.end();
            } else if (data.password !== sha256(password + data.usersalt)) {
                // Wrong Password
                res.statusCode = 404;
                res.end();
            } else {
                // user valid
                var secret = config.security.secret;
                var expiresInMinutes = config.security.expirationTimeInMinutes;
                // TODO bor Adapt jwt concept
                var token = jwt.sign(data,
                    secret, {
                        expiresInMinutes: expiresInMinutes
                    }
                );
                res.statusCode = 200;
                res.json({token: token, user: data});
            }
        });
};

/**
 * Sends an SMS Code to the user's phone
 * - Check if Errors happened
 * - Error Codes 200 -> OK
 *               404 -> User not found
 * @param req
 * @param res
 */
exports.sendSmsCode = function (req, res, next) {
    var id = req.params.id;

    User.findOne({_id: id}, function (err, user) {
        if (!user) {
            res.statusCode = 404;
            res.end('User not found!');
        }
        switch (user.selectedMode) {
            case 'sms':
                user.generateActivationCode();

                smsSender.sendMessage({
                    to: user.mobile,
                    from: '+41798071840',
                    body: 'Activation Code for ti&m Security Suite Showcase: ' + user.activationCode

                }, function (err, responseData) {
                });

                res.end('Activation SMS sent!');
                break;
            case 'email':
                user.generateActivationCode();
                sendActivationMail(user);
                res.end('E-Mail sent!');
                break;
            default:
                break;
        }
    });
};

/**
 * Checks if the SMS Code is valid
 * - Check if Errors happened
 * - Error Codes 200 -> OK
 *               404 -> User not found
 * @param req
 * @param res
 */
exports.checkSmsCode = function (req, res, next) {
    var id = req.body.id;
    var code = req.body.code;

    User.findOne({_id: id}, function (err, user) {
        if (!user) {
            res.status(404);
            res.end('User not found!');
        }
        if (user.activationCode == code) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
};

/**
 * Creates a new payment
 * - Check if Errors happened
 * - Error Codes 201 -> OK
 *               400 -> ValidationError
 *               404 -> User not found
 *               500 -> Error reading user from db
 * - In "err" is a JSON file(message,name,errors,..)
 * @param req
 * @param res
 */
exports.createPayment = function (req, res) {
    var id = req.body.id;
    var data = {
        receiver: req.body.receiver,
        amount: req.body.amount,
        fullname: req.body.fullname,
        purpose: req.body.purpose
    };

    User.findOneAndUpdate({_id: id}, {$push: {payments: data}}, function (err, user) {
        if (user && !err) {
            res.status(201);
            res.end();
        }
        else if (!user) {
            res.status(404);
            res.end('User not found!');
        }
        else {
            switch (err.name) {
                case 'ValidationError':
                    res.status(400);
                    res.json(err);
                    break;

                default:
                    res.status(500);
                    res.json(err);
                    break;
            }
        }
    });
};

/**
 * Returns all payments of the user
 * - Check if Errors happened
 * - Error Codes 200 -> OK
 *               400 -> ValidationError
 *               404 -> User not found
 *               500 -> Error reading user from db
 * - In "err" is a JSON file(message,name,errors,..)
 * @param req
 * @param res
 */
exports.getPayments = function (req, res) {
    var id = req.params.id;

    User.findOne({_id: id}, function (err, user) {
        if (user && !err) {
            res.status(200);
            res.json(user.payments);
        }
        else if (!user) {
            res.status(404);
            res.end('User not found!');
        }
        else {
            switch (err.name) {
                case 'ValidationError':
                    res.status(400);
                    res.json(err);
                    break;

                default:
                    res.status(500);
                    res.json(err);
                    break;
            }
        }
    });
};

var sendActivationMail = function (user) {
    var subject = 'Security Suite Showcase - Please activate your account';
    var fn = jade.compileFile('app/views/mailers/activation.jade');
    var htmlMail = fn(user);
    var textMail = 'https://localhost:3000/users/' + user._id + '/activate';

    ActivationMailer.sendMail(
        'marc.borntraeger@gmail.com',
        subject,
        textMail,
        htmlMail
    );
};

/**
 * Activates the user's account
 * - Check if Errors happened
 * - Error Codes 200 -> OK
 *               404 -> User not found
 * @param req
 * @param res
 */
exports.activate = function (req, res) {
    var id = req.params.id;

    User.findOne({_id: id}, function (err, user) {
        if (!user) {
            res.statusCode = 404;
            res.end('User not found!');
        }
        user.activated = true;
        user.save();
        res.end('User activated!');
    });
};
