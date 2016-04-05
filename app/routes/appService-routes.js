var appServiceController = require('../../app/controllers/appService-controller');

module.exports = function (app, isAuthenticated) {
    app.route('/api/appService/register').post(isAuthenticated, appServiceController.create);
};
