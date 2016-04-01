var imageController = require('../../app/controllers/image-controller');

module.exports = function (app) {
    app.route('/image/upload').post(imageController.uploadFile);
};
