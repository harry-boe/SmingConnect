class ApplicationServiceService {

	constructor($http, baseUrl) {
		this.$http = $http;
		this.baseUrl = baseUrl;
	}

     register(AppServiceName, annoucementID, description, file, mimeType, size) {
     	return this.$http.post(
               this.baseUrl + '/register', {
     			AppServiceName: AppServiceName,
     			annoucementID: annoucementID,
     			description: description,
                    imageRef: file,
                    mimeType: mimeType,
                    size: size
               });
     	}
     }



 export default [
 '$http',
 'apiAppServiceUrl',
 ApplicationServiceService
 ];
