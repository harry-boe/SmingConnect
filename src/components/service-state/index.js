import './service-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import 'angular-messages';
import translationsModule from './i18n/translations';
import ServiceStateController from './service-state-controller';
import serviceRouteConfig from './service-route';
import fileUploadDirective from '../file-upload-directive/file-upload-directive';


const dependencies = [
    'ui.router',
    'ngMessages',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('service-state-component', dependencies)
    .controller('ServiceStateController', ServiceStateController)
    .directive('fileUpload', fileUploadDirective)
    .config(serviceRouteConfig);
