class FileUploadService {


	constructor(httpService, baseUrl) {
		console.log("construct FileUploadService Service");
		this.httpService = httpService;
		this.baseUrl = baseUrl;
	}

	/**
     * Configures the HttpService instance, so that it can be used for rest services.
     */
    getConfiguredHttpService() {
		console.log("getConfiguredHttpService FileUploadService Service");
     	this.httpService.baseUrl = this.baseUrl;
     	return this.httpService;
    }


 	uploadFile(file){
        var fd = new FormData();
        fd.append('file', file);
        this.getConfiguredHttpService().post(this.baseUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function (uploadResponse) {
     			console.log(uploadResponse);
     			return uploadResponse;
     	});
	}
}

export default [
 'http',
 'uploadUrl',
 FileUploadService
 ];