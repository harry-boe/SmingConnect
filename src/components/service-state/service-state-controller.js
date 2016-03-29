class ServiceStateController {

	constructor($scope, fileUpload, $timeout) {
		this.scope = $scope;
		this.fileUpload = fileUpload;
		this.timeout = $timeout;

		this.files = '';
	};
	
	upload (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                this.fileUpload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {
                      username: $scope.username,
                      file: file  
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.log;
                });
              }
            }
        }
    };

	executeForm() {
		console.log('RegisterState execute submit');
		console.log('appName' + this.appName);
		console.log('appID' + this.appID);
		console.log('description' + this.description);
		console.log('files [' + this.scope.fileName + ']');

	};


}

//ServiceStateController.$inject = ["$scope", "fileUpload", "$timeout"];


export default [
'$scope',
'fileUpload',
'$timeout',
ServiceStateController
];
