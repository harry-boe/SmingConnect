class LoginFormComponentController {


	constructor(userService, $q, $state, $scope, $mdDialog) {
		console.log("LoginFormComponentController constructor(userService, $state, $scope, $mdDialog)");
    	this.userService = userService;
    	this.state = $state;
    	this.scope = $scope;
    	this.mdDialog = $mdDialog;
      this.deferred = $q.defer();
      this.user = null;
    	this.errorMessageLogin = "";
	}

	cancel() {
	  console.log("LoginFormComponentController cancel()");
      this.mdDialog.hide();
    }

	login() {
		this.errorMessageLogin  = "";
  		this.userService.login(
    	this.username, this.password
    ).then((loginSuccees) => {
        this.user = true;
        this.deferred.resolve();
        this.mdDialog.hide();
//        this.state.go('app.setup');
      }, (loginError) => {
        console.log("registration failed " + loginError.status);      
        this.errorMessageLogin  = "login failed";
        this.user = false;
        this.deferred.reject();
      }
    );
      // return promise object
    return this.deferred.promise;
  }

}

export default [
	'userService',
  '$q',
	'$state',
	'$scope',
	'$mdDialog',
  LoginFormComponentController
];
