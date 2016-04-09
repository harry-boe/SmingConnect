import './signup-form-component.css!';
import angular from 'angular';
import 'angular-translate';
import 'angular-messages';
import translationsModule from './i18n/translations';
import SignupFormComponentController from './signup-form-component-controller';
import signupFormComponent from './signup-form-component';

const dependencies = [
    'ngMessages',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('signup-form-component', dependencies)
    .controller('SignupFormComponentController', SignupFormComponentController)
    .component('signupForm', signupFormComponent);
