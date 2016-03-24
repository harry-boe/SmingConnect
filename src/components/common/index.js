import angular from 'angular';
import HttpService from './services/http-service';
import AccountService from './services/account-service';


const dependencies = [
];

export default angular
    .module('common', dependencies)
    .service('http', HttpService)
    .service('accountService', AccountService);

