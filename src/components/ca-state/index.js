import './ca-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import CaStateController from './ca-state-controller';
import caRouteConfig from './ca-route';

const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('ca-state-component', dependencies)
    .controller('CaStateController', CaStateController)
    .config(caRouteConfig);
