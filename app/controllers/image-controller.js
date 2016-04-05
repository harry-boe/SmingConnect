

var config = require('../../config/config.js');
var multer  = require('multer');
var AppService = require('mongoose').model('AppService');
const fs = require('fs');

const Icon_Template =  './Icon_Template.svg';
const Upload_Folder = './uploads';

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, Upload_Folder);
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage}).single('appIcon');

exports.uploadImage = function (req, res) {
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        // only provide usefull data
        delete req.file.destination;
        delete req.file.encoding;        
        delete req.file.originalname;
        delete req.file.path;
        delete req.file.fieldname;
        res.json(req.file);
    });
};

exports.loadImage = function (req, res, next) {

    var id = req.params.id;

    AppService.findOne({
            imageRef: id
        },

    function (error, data) {
        if (error) {
            // error reading AppService from db
            res.statusCode = 500;
            res.end();
        } else if (!data) {
            // image not found
            // fall back to default
            next('route');
        } else {
            var file = Upload_Folder + '/' + id;
            var filestream = fs.createReadStream(file);
            res.statusCode = 200;
            res.setHeader('Content-type', data.mimeType);
            res.setHeader('Content-length', data.size);

            filestream.pipe(res);

            // oops!! should not happen 
            // however fall back to default image
            filestream.on('error', function(err){ 
                next('route');
            });

        }        
    });
};


exports.loadDefault = function (req, res, next) {

    var templ = fs.createReadStream(Icon_Template);

    var stats = fs.statSync(Icon_Template)
    var size = stats["size"]

    res.setHeader('Content-type', 'image/svg+xml');
    res.setHeader('Content-length', size);
    templ.pipe(res);

    // error handler if template could not be found
    templ.on('error', function(err){ 
        console.log("filestream templ: file not found");
        next();
    });

};




