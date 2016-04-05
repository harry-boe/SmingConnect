import './service-entry-component.css!';
import angular from 'angular';
import 'angular-translate';
import 'angular-messages';
import translationsModule from './i18n/translations';
import ServiceEntryComponentController from './service-entry-component-controller';
import serviceEntryComponent from './service-entry-component';
import fileUploadDirective from 'components/file-upload-directive/index';


const dependencies = [
    'pascalprecht.translate',
    'ngMessages',
    fileUploadDirective.name,
    translationsModule.name
];

export default angular
    .module('service-entry-component', dependencies)
    .controller('ServiceEntryComponentController', ServiceEntryComponentController)
    .component('serviceEntry', serviceEntryComponent);
