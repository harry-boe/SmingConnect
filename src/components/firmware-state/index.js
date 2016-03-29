import './firmware-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import fileUploadDirective from '../file-upload-directive/file-upload-directive';
import FirmwareStateController from './firmware-state-controller';
import firmwareRouteConfig from './firmware-route';

const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('firmware-state-component', dependencies)
    .controller('FirmwareStateController', FirmwareStateController)
    .directive('fileUpload', fileUploadDirective)
    .config(firmwareRouteConfig);
