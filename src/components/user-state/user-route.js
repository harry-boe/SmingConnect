import template from './user-state.html!text';

function userRouteConfig($stateProvider) {
    $stateProvider
        .state('app.user', {
            url: 'user',
            views: {
                application: {
                    controller: 'UserStateController as userState',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    userRouteConfig
];
