import './register-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import 'angular-messages';
import translationsModule from './i18n/translations';
import RegisterStateController from './register-state-controller';
import registerRouteConfig from './register-route';

const dependencies = [
    'ui.router',
    'ngMessages',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('register-state-component', dependencies)
    .controller('RegisterStateController', RegisterStateController)
    .config(registerRouteConfig);
