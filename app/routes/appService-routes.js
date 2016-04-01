var appServiceController = require('../../app/controllers/appService-controller');

module.exports = function (app) {
    app.route('/api/appService/register').post(appServiceController.create);
};
