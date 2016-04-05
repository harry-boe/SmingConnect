import './ca-root-cert-entry-component.css!';
import angular from 'angular';
import 'angular-translate';
import 'angular-messages';
import translationsModule from './i18n/translations';
import CaRootCertEntryComponentController from './ca-root-cert-entry-component-controller';
import caRootCertEntryComponent from './ca-root-cert-entry-component';

const dependencies = [
    'pascalprecht.translate',
    'ngMessages',
    translationsModule.name
];

export default angular
    .module('ca-root-cert-entry-component', dependencies)
    .controller('CaRootCertEntryComponentController', CaRootCertEntryComponentController)
    .component('caRootCertEntry', caRootCertEntryComponent);
