class FirmwareStateController {

    constructor(fileUpload, $scope) {
    	this.fileUpload = fileUpload;
        this.$scope = $scope;
    }

	uploadFile(files){
	    var fd = new FormData();
    	//Take the first selected file
    	fd.append("file", files[0]);
    	console.log("File " + files[0]);

    	this.fileUpload.uploadFile(fd, {
        	withCredentials: true,
        	headers: {'Content-Type': undefined },
        	transformRequest: angular.identity
    	})
    	.success()
    	.error();
    };

}

export default [
	'fileUpload',
	'$scope',
    FirmwareStateController
];
