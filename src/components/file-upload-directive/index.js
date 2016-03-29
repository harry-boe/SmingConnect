import angular from 'angular';
import 'angular-translate';
import translationsModule from './i18n/translations';
import FileUploadDirectiveController from './file-upload-directive-controller';
import fileUploadDirective from './file-upload-directive';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('file-upload-directive-component', dependencies)
    .controller('FileUploadDirectiveController', FileUploadDirectiveController)
    .directive('fileUpload', fileUploadDirective);
