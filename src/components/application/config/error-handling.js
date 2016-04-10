function errorHandlingConfig($rootScope) {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        throw new Error(`error occurred while transitioning to ${toState.name}: ${error}`);
    });

    $rootScope.$on("$routeChangeStart", function(evt, to, from) {
        console.log('got route change to ' + to);
    });

}

export default [
    '$rootScope',
    errorHandlingConfig
];
