import template from './ca-state.html!text';

function caRouteConfig($stateProvider) {
    $stateProvider
        .state('app.ca', {
            url: 'ca',
            views: {
                application: {
                    controller: 'CaStateController as caState',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    caRouteConfig
];
