import template from './register-state.html!text';

function registerRouteConfig($stateProvider) {
    $stateProvider
        .state('app.register', {
            url: 'register',
            views: {
                application: {
                    controller: 'RegisterStateController as registerController',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    registerRouteConfig
];
