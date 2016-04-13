function errorHandlingConfig($rootScope, $injector, $urlRouter) {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        throw new Error(`error occurred while transitioning to ${toState.name}: ${error}`);
    });

   //  $rootScope.$on('$locationChangeSuccess', function(e) {
   //      console.log('fire $locationChangeSuccess');
   //      var userService = $injector.get('userService');
	  //   // UserService is an example service for managing user state
   // 		 if (userService.isLoggedIn()) return;
 
   //  	// Prevent $urlRouter's default handler from firing
   //  	e.preventDefault();
 
   //  	userService.handleLogin().then(function() {
   //    // Once the user has logged in, sync the current URL
   //    // to the router:
   //    	$urlRouter.sync();
   //  	});
  	// });

}

export default [
    '$rootScope',
    '$injector',
    '$urlRouter',
    errorHandlingConfig
];
