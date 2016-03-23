import template from './subscribe-state.html!text';

function subscribeRouteConfig($stateProvider) {
    $stateProvider
        .state('app.subscribe', {
            url: 'subscribe',
            views: {
                application: {
                    controller: 'SubscribeStateController as subscribeState',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    subscribeRouteConfig
];
