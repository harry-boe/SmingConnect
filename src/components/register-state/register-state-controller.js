class RegisterStateController {


// constructor(fidoService, $scope, $state) {
 //        this.weakAuthenticated = false;
 //        this.fidoService = fidoService;
 //        this.state = $state;

 //        // Begin strong authentication, when user logs in.
 //        $scope.$on('userLoggedIn', () => {
 //            this.weakAuthenticated = true;
 //            this.authenticateStrong();
 //        });
 //    }

	constructor(accountService, $state) {
		this.accountService = accountService;

		this.eMail = "john.doe@nowhere.net";
  	};

  	dataCheck() {
  		if (this.pwd !== this.confirmPwd) {
  			this.errorMessagePwd = "Confirmation Password must be equal";
  			return false;
  		}
            return true;
    }

  	executeForm() {
        if (this.dataCheck() === true) {
			console.log('RegisterState execute submit');
        }
    }

}



export default [
	'$state',
    RegisterStateController
];
