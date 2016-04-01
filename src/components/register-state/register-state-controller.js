class RegisterStateController {

  constructor(accountService, $state) {
    this.accountService = accountService;
    this.state = $state;

 //   this.errorMessageUid = "User name or Nick name you like to login with.";

    // this.eMail = "john.doe@nowhere.net";
    // this.postalCode = 8000;
  };

  dataCheck() {
    if (this.password !== this.confirmPwd) {
     this.errorMessagePwd = "Confirmation Password must be identical";
     return false;
   }
   return true;
 }


 registerUser() {
  this.accountService.register(
    this.userId, this.eMail, this.firstName, this.lastName,
    this.company, this.address, this.addressExt, this.city,
    this.postalCode, this.password
    ).then((registerSuccess) => {
        console.log("registerUser " + this.userId + " registratered");
        this.state.go('app.setup');
      }, (registerError) => {
        this.errorMessageUid = "User or eMail allready used";
        this.errorMessageEMail = "Please check if you you aready registered this eMail";
        console.log("registration failed " + registerError.status);        
      }
    );
  }


  executeForm() {
    this.errorMessagePwd = null;
    this.errorMessageUid = null;
    this.errorMessageEMail = null;
    if (this.dataCheck() === true) {
      this.registerUser() 
    }
  }

}


export default [
'accountService',
'$state',
RegisterStateController
];
