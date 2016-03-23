import './subscribe-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import SubscribeStateController from './subscribe-state-controller';
import subscribeRouteConfig from './subscribe-route';

const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('subscribe-state-component', dependencies)
    .controller('SubscribeStateController', SubscribeStateController)
    .config(subscribeRouteConfig);
