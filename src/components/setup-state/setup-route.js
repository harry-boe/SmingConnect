import template from './setup-state.html!text';

function setupRouteConfig($stateProvider) {
    $stateProvider
        .state('app.setup', {
            url: 'setup',
            views: {
                application: {
                    controller: 'SetupStateController as setupState',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    setupRouteConfig
];
