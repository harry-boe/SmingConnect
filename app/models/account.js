
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
      // userData
    userId: {
        type: String,
        unique: true,
        required: true
    },
    eMail: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    addressExt: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    usersalt: {
        type: String,
        requred: true
    }
});

User = mongoose.model('Account', AccountSchema);
