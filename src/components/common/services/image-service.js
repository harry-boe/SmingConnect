class ImageService {


    constructor($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
    }


 	upload(formData) {
        return this.$http.post(this.baseUrl, formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
  }
}

export default [
 '$http',
 'uploadUrl',
 ImageService
 ];