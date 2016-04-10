
function HttpResponseError ($q, $injector) {

//	console.log('HttpResponseError');

    return {
      // This is the responseError interceptor
      responseError: function(rejection) {
        if (rejection.status === 401) {
//        	console.log("HttpResponseError show login dialog");
       		var dialog = $injector.get('$mdDialog');
       	 	var parentEl = angular.element(document.body);
       		return dialog.show({
         		parent: parentEl,
         		template: '<login-form></login-form>'
      		});
        }

        /* If not a 401, do nothing with this error.
         * This is necessary to make a `responseError`
         * interceptor a no-op. */
        return $q.reject(rejection);
      }
    };
  }

export default [
    '$q',
    '$injector',
    HttpResponseError
];
