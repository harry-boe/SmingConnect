import angular from 'angular';
import HttpService from './services/http-service';
import AccountService from './services/account-service';
import FileUploadService from './services/fileUpload-service';


const dependencies = [
];

export default angular
    .module('common', dependencies)
    .service('http', HttpService)
    .service('accountService', AccountService)
    .service('fileUpload', FileUploadService);

