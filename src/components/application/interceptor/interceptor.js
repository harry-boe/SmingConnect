
import 'angular-material';
import httpInterceptor from './httpInterceptor';
import loginFormComponent from 'components/login-form/index';


const dependencies = [
    'ngMaterial',
    loginFormComponent.name,
];

export default angular
    .module('httpInterceptor', dependencies)
    .config(httpInterceptor)

