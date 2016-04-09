
var passport = require('passport'),
    mongoose = require('mongoose');


module.exports = function() {
    
  var User = mongoose.model('User');

	passport.serializeUser(function(user, done) {
//      console.log("Serialize user " + user);
      done(null, user.id);
	});
    
  passport.deserializeUser(function(id, done) {
       User.findOne({
         _id: id
       }, '-password -salt', function(err, user) {
//          console.log("deserializeUser user " + id);
          done(err, user);
       });
	});
     
  require('./strategies/local.js')();

};