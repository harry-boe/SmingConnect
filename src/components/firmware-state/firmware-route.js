import template from './firmware-state.html!text';

function firmwareRouteConfig($stateProvider) {
    $stateProvider
        .state('app.firmware', {
            url: 'firmware',
            views: {
                application: {
                    controller: 'FirmwareStateController as firmwareController',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    firmwareRouteConfig
];
