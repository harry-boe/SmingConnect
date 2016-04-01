class FileUploadService {


    constructor($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
    }


 	uploadFile() {
    var fd = new FormData();
        fd.append('appIcon', this.scope.file);
        this.http.post(this.baseUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
  }

}

export default [
 'http',
 'uploadUrl',
 FileUploadService
 ];