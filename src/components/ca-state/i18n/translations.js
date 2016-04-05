import angular from 'angular';
import 'angular-translate';
import en from './en';

const dependencies = [
    'pascalprecht.translate'
];

export default angular
    .module('ca-state-component-translations', dependencies)
    .config(en);
