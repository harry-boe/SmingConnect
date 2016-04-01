class ServiceStateController {

	constructor($scope, appServiceService, $http) {
		this.scope = $scope;
		this.appServiceService = appServiceService;
		this.http = $http;

		this.files = '';
	};
	
	
  registerAppService() {
  this.appServiceService.register(
    this.serviceName, this.announcementID, this.description, this.scope.file
    ).then((registerSucess) => {
        console.log("registerAppService " + this.userId + " registratered");
        this.state.go('app.setup');
      }, (registerError) => {
        // this.errorMessageUid = "User or eMail allready used";
        // this.errorMessageEMail = "Please check if you you aready registered this eMail";
        console.log("registration failed " + registerError.status);        
      }
    );
  }

  uploadFile() {
    var uploadUrl = 'http://localhost:3000/image/upload';
    var fd = new FormData();
        fd.append('appIcon', this.scope.file);
        this.http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
  }


	executeForm() {
		console.log('RegisterState execute submit');
		console.log('announcementID' + this.announcementID);
		console.log('description' + this.description);
		console.log('files [' + this.scope.file + ']');
    this.uploadFile();
    this.registerAppService();
	};


}

//ServiceStateController.$inject = ["$scope", "fileUpload", "$timeout"];


export default [
'$scope',
'appServiceService',
'$http',
ServiceStateController
];
