var accountController = require('../../app/controllers/account-controller');

module.exports = function (app) {
    app.route('/api/account/register').post(accountController.create);
};
