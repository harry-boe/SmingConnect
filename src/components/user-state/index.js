import './user-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import UserStateController from './user-state-controller';
import userRouteConfig from './user-route';
import loginFormComponent from 'components/login-form/index';
import signupFormComponent from 'components/signup-form/index';


const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name,
    loginFormComponent.name,
    signupFormComponent.name
];

export default angular
    .module('user-state-component', dependencies)
    .controller('UserStateController', UserStateController)
    .config(userRouteConfig);
