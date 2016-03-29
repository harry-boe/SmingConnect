import './setup-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import SetupStateController from './setup-state-controller';
import setupRouteConfig from './setup-route';

const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('setup-state-component', dependencies)
    .controller('SetupStateController', SetupStateController)
    .config(setupRouteConfig);
