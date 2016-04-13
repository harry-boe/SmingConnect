import futureStates from './states.json!';

function routingConfig($locationProvider, $urlRouterProvider, $httpProvider, $futureStateProvider) {
    futureStates.forEach((state) => $futureStateProvider.futureState(state));
    $httpProvider.useApplyAsync(true);
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/index');
    $urlRouterProvider.when('/', '/index');

    $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.path();
        console.log("Find protected states");

        var protectedStates = futureStates.filter(function( obj ) {
            return (obj.authorize == "true")
        });
        console.log("Check if " + path + " is protectd");
        var result = protectedStates.filter(function( obj ) {
            return path.endsWith(obj.url);
        });
        if (result.length > 0) {
            console.log("Login rquired for" + path);
            var userService = $injector.get('userService');
            if (userService.handleLogin()) {
                return $location.path();
            };
        } 
    });
}

export default [
    '$locationProvider',
    '$urlRouterProvider',
    '$httpProvider',
    '$futureStateProvider',
    routingConfig
];
