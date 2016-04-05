import './ca-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import CaStateController from './ca-state-controller';
import caRouteConfig from './ca-route';
import caRootCertEntryComponent from 'components/ca-root-cert-entry/index';


const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    caRootCertEntryComponent.name,
    translationsModule.name
];

export default angular
    .module('ca-state-component', dependencies)
    .controller('CaStateController', CaStateController)
    .config(caRouteConfig);
