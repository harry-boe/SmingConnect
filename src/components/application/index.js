import './stylesheets/application.css!';
import 'babel/external-helpers';
import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import 'oclazyload';
import ngLazy from 'angular-lazy';
import 'angular-translate';
import translationsModule from './i18n/translations';
import interceptorModule from './interceptor/interceptor';
import defaultLocaleConfig from './config/default-locale';
import routingConfig from './config/routing';
import errorHandlingConfig from './config/error-handling';
import constants from './config/constants.json!';
import ApplicationController from './application-controller';
import applicationRoute from './application-route';
import 'angular-material';
import commonModule from 'components/common/index';
import 'angular-local-storage';


const dependencies = [
    'ui.router',
    'oc.lazyLoad',
    'ct.ui.router.extras',
    'ct.ui.router.extras.future',
    ngLazy.name,
    'pascalprecht.translate',
    translationsModule.name,
    interceptorModule.name,
    'ngMaterial',
    'LocalStorageModule',
    commonModule.name
];

const app = angular
    .module('application-component', dependencies)
    .controller('ApplicationController', ApplicationController)
    .config(routingConfig)
    .config(applicationRoute)
    .config(defaultLocaleConfig)
    .run(errorHandlingConfig);

Object.keys(constants).forEach((constantName) => {
    app.constant(constantName, constants[constantName]);
});

export default app;
