

var config = require('../../config/config.js');
var multer  = require('multer')

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage}).single('appIcon');


exports.uploadFile = function (req, res) {
    upload(req,res,function(err) {
        console.log(req.file);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end(req.file.filename);
    });
};



