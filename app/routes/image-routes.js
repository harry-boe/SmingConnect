var imageController = require('../../app/controllers/image-controller');

module.exports = function (app, isAuthenticated) {
    app.route('/image/:id').get(isAuthenticated, imageController.loadImage);
    app.route('/image/:id').get(isAuthenticated, imageController.loadDefault);  // fallback route
    app.route('/image/upload').post(isAuthenticated, imageController.uploadImage);
};
