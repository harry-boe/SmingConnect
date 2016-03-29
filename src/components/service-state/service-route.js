import template from './service-state.html!text';

function serviceRouteConfig($stateProvider) {
    $stateProvider
        .state('app.service', {
            url: 'service',
            views: {
                application: {
                    controller: 'ServiceStateController as serviceController',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    serviceRouteConfig
];
