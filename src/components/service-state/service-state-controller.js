class ServiceStateController {

	constructor($state, $scope, $mdToast, imageService, appServiceService) {
    this.state = $state;
		this.scope = $scope;
    this.mdToast = $mdToast;
    this.imageService = imageService;
		this.appServiceService = appServiceService;
	};
	

  executeForm() {

    this.errorMessageServiceName = null;
    this.errorMessageAnnouncementID = null;

    console.log('call doSubmit()');
    // we have to be synchronious here
    // step 1 save image
    var fd = new FormData();
    console.log('appIcon ' + this.scope.file);
    if (this.scope.file == null) {
        this.mdToast.show(
          this.mdToast.simple()
            .textContent('Please upload an application icon!')
            .position('top right')
            .hideDelay(3000)
        )
        return false;
    };
    fd.append('appIcon', this.scope.file);
    this.imageService.upload(
      fd
    ).then((uploadSuccess) => {
        console.log('imageService ' + uploadSuccess.data.filename + ' uploaded: ');
        this.filename = uploadSuccess.data.filename;
        this.mimetype = uploadSuccess.data.mimetype;
        this.fileSize = uploadSuccess.data.size;

        // step 2 save form data
        if (this.registerAppService() === true) {
//          this.state.go('app.setup');      
        } else {
          this.errorMessageServiceName = "Service already registered";
          this.errorMessageAnnouncementID = "Announcment ID alredy defined";
          return false;       
        }
      }, (uploadError) => {
        console.log("imageService failed " + uploadError.status);   
        return false;  
      }
    );
  }

	
  registerAppService() {
    console.log('call registerAppService()');
    this.appServiceService.register(
      this.serviceName, this.announcementID, this.description, 
      this.filename, this.mimetype, this.fileSize
    ).then((registerSuccess) => {
        console.log("registerAppService " + this.serviceName + " registratered");
        this.state.go('app.setup');      
        return true;
      }, (registerError) => {
        console.log("Service registration failed " + registerError.status); 
        return false;       
      }
    );
  }


}

export default [
'$state',
'$scope',
'$mdToast',
'imageService',
'appServiceService',
ServiceStateController
];
