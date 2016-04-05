class LoginFormComponentController {


	constructor(userService, $state, $scope, $mdDialog) {
		console.log("LoginFormComponentController constructor(userService, $state, $scope, $mdDialog)");
    	this.userService = userService;
    	this.state = $state;
    	this.scope = $scope;
    	this.mdDialog = $mdDialog;

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
        this.mdDialog.hide();
        this.state.go('app.setup');
      }, (loginError) => {
        console.log("registration failed " + loginError.status);      
        this.errorMessageLogin  = "login failed";
      }
    );
  }


}

export default [
	'userService',
	'$state',
	'$scope',
	'$mdDialog',
    LoginFormComponentController
];
