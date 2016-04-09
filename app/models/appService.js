
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppServiceSchema = new Schema({
      // userData
    AppServiceName: {
        type: String,
        unique: true,
        required: true
    },
    annoucementID: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageRef: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: false
    }
});

AppService = mongoose.model('AppService', AppServiceSchema);
