import './index-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import translationsModule from './i18n/translations';
import IndexStateController from './index-state-controller';
import indexRouteConfig from './index-route';

import subscribeComponent from 'components/subscribe/index';
import loginComponent from 'components/login/index';


const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    subscribeComponent.name,
    loginComponent.name,
    translationsModule.name
];

export default angular
    .module('index-state-component', dependencies)
    .controller('IndexStateController', IndexStateController)
    .config(indexRouteConfig);
