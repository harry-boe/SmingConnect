var config = require('./config');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

console.log('Mailer: Using smpt');
module.exports = nodemailer.createTransport(smtpTransport(config.mailer));
