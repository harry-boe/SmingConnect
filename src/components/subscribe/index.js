import './subscribe-component.css!';
import angular from 'angular';
import 'angular-translate';
import translationsModule from './i18n/translations';
import SubscribeComponentController from './subscribe-component-controller';
import subscribeComponent from './subscribe-component';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('subscribe-component', dependencies)
    .controller('SubscribeComponentController', SubscribeComponentController)
    .component('subscribe', subscribeComponent);
