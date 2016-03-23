/*eslint-disable */
'use strict';
/*eslint-enable */

const server   = require('gulp-express');


module.exports = (gulp, config) => {
    gulp.task('serve' , ['build'], function () {
    // Start the server at the beginning of the task 
        server.run(['server.js']); 
        gulp.watch(['build/**/*', 'app/**/*'], server.notify);
    });
};    

