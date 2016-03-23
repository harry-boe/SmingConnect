var Transporter = require('../../config/mailer');

module.exports.sendMail = function (email, subject, textMail, htmlMail) {
    var mailOptions = {
        from: '',
        to: email,
        text: textMail,
        subject: subject,
        html: htmlMail,
        auth: {
            user: 'showcase-ng',
            pass: 'testpassword'
        }
    };

    Transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
};

