var app = require('../../server.js'),
    request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var userJson = {
    email: 'felix.langenegger@gmail.com',
    mobile: '0797527340',
    password: 'password'
};

describe('User', function () {

    it('should be able to create a new user by POST', function (done) {
        request(app)
            .post('/users')
            .send(userJson)
            .expect(200)
            .expect('User created!', done);
    });

    it('should not be an activated user', function (done) {
        User.findOne({"email": "felix.langenegger@gmail.com"}, function (err, user) {
            if (err) {
                console.log("Error: " + err);
            } else {
                user.email.should.be.eql('felix.langenegger@gmail.com');
                user.activated().should.be.false();
            }
        });
        done();
    });

    it('should be activated by link', function (done) {
        User.findOne({"email": "felix.langenegger@gmail.com"}, function (err, user) {
            if (err) {
                console.log("Error: " + err);
            } else {
                var id = user._id;
                request(app)
                    .post('/users/' + id + '/activate')
                    .expect(200);
            }
        });

        User.findOne({"email": "felix.langenegger@gmail.com"}, function (err, user) {
            if (err) {
                console.log("Error: " + err);
            } else {
                user.activated().should.be.false();
            }
        });

        done();
    });

    after(function (done) {
        User.remove().exec();
        done();
    });
});
