class ApplicationServiceService {

	constructor($http, baseUrl) {
		this.$http = $http;
		this.baseUrl = baseUrl;
	}

     register(AppServiceName, annoucementID, description, file) {
     	return this.$http.post(
               this.baseUrl + '/register', {
     			AppServiceName: AppServiceName,
     			annoucementID: annoucementID,
     			description: description,
                    file: file
               });
     	}
     }



 export default [
 '$http',
 'apiAppServiceUrl',
 ApplicationServiceService
 ];
