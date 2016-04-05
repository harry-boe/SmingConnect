var imageController = require('../../app/controllers/image-controller');

module.exports = function (app) {
    app.route('/image/:id').get(imageController.loadImage);
    app.route('/image/:id').get(imageController.loadDefault);  // fallback route
    app.route('/image/upload').post(imageController.uploadImage);
};
