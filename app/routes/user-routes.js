var userController = require('../../app/controllers/user-controller'),
	passport = require('passport');

module.exports = function (app, isAuthenticated) {
    app.route('/api/user/signup').post(userController.signup);
    app.route('/api/user/login').post(passport.authenticate('local', {
    	successRedirect: '/api/user/loginSuccess',
    	failureRedirect: '/api/user/loginFailure'
  	}))
    app.route('/api/user/loginSuccess').get(userController.loginSuccess);
    app.route('/api/user/loginFailure').get(userController.loginFailure);
    app.route('/api/user/signout').post(isAuthenticated, userController.signout);
};
