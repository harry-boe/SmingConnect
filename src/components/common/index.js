import angular from 'angular';
import AccountService from './services/account-service';
import ApplicationServiceService from './services/app-service-service';
import FileUploadService from './services/file-upload-service';


const dependencies = [
];

export default angular
    .module('common', dependencies)
    .service('accountService', AccountService)
    .service('appServiceService', ApplicationServiceService)
    .service('fileUpload', FileUploadService);

