import './service-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import ServiceStateController from './service-state-controller';
import serviceRouteConfig from './service-route';
import serviceEntryComponent from 'components/service-entry/index';



const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    serviceEntryComponent.name,
    translationsModule.name
];

export default angular
    .module('service-state-component', dependencies)
    .controller('ServiceStateController', ServiceStateController)
    .config(serviceRouteConfig);
