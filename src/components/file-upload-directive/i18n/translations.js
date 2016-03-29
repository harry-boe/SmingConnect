import angular from 'angular';
import 'angular-translate';
import en from './en';

const dependencies = [
    'pascalprecht.translate'
];

export default angular
    .module('file-upload-directive-component-translations', dependencies)
    .config(en);
