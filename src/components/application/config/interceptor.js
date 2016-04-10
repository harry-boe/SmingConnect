
function interceptorConfig ($httpProvider) {

  function authInterceptor ($q, $injector, userService) {
      return {
        request: function(request) {
          request.headers.authorization =
            userService.getAuthorization();
          return request;
        },
        // This is the responseError interceptor
        responseError: function(rejection) {
          if (rejection.status === 401) {
            console.log('-> from interceptor: got error 401');
            // Return a new promise
            return userService.authenticate().then(function() {
              return $injector.get('$http')(rejection.config);
            });
          }

          /* If not a 401, do nothing with this error.
           * This is necessary to make a `responseError`
           * interceptor a no-op. */
          return $q.reject(rejection);
        }
      }
  }

  authInterceptor.$inject = ['$q', '$injector', 'userService'];

  $httpProvider.interceptors.push('authInterceptor')

};

export default [
    '$httpProvider',
    interceptorConfig
];

