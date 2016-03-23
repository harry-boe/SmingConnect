var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // generalData
    company: String,
    lastName: String,
    firstName: String,
    address: String,
    zip: Number,
    country: String,
    email: String,

    // userData
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },

    // notificationModeData
    selectedMode: String,

    // "hidden" Infos
    activated: {
        type: Boolean,
        default: false
    },
    token: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    deviceRegistration: String,
    activationCode: Number,
    usersalt: {
        type: String,
        requred: true
    },

    // payments
    payments: [
        {
            receiver: String,
            amount: Number,
            fullname: String,
            purpose: String
        }
    ]
});

User = mongoose.model('User', UserSchema);

User.prototype.generateActivationCode = function () {
    var code = Math.floor((Math.random() * 1000000) + 1);
    this.activationCode = code;
    this.save();
    return code;
};
