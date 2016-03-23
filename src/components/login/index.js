import './login-component.css!';
import angular from 'angular';
import 'angular-translate';
import translationsModule from './i18n/translations';
import LoginComponentController from './login-component-controller';
import loginComponent from './login-component';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('login-component', dependencies)
    .controller('LoginComponentController', LoginComponentController)
    .component('login', loginComponent);
