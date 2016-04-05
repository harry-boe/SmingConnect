import './login-form-component.css!';
import angular from 'angular';
import 'angular-translate';
import 'angular-messages';
import translationsModule from './i18n/translations';
import LoginFormComponentController from './login-form-component-controller';
import loginFormComponent from './login-form-component';

const dependencies = [
    'pascalprecht.translate',
    'ngMessages',
    translationsModule.name
];

export default angular
    .module('login-form-component', dependencies)
    .controller('LoginFormComponentController', LoginFormComponentController)
    .component('loginForm', loginFormComponent);
