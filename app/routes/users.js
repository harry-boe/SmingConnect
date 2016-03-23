var usersController = require('../../app/controllers/users');

module.exports = function (app) {
    app.route('/showcase/users/create').post(usersController.create);
    app.route('/showcase/users/login').post(usersController.login);
    // app.route('/showcase/users/:id/sendSmsCode').get(usersController.sendSmsCode);
    // app.route('/showcase/users/checkSmsCode').post(usersController.checkSmsCode);
    app.route('/showcase/users/:id/activate').get(usersController.activate);
    app.route('/showcase/users/createPayment').post(usersController.createPayment);
    app.route('/showcase/users/:id/getPayments').get(usersController.getPayments);
};
