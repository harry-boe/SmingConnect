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
  console.log('RegisterState call registerUser');
  this.accountService.register(
    this.userId, this.eMail, this.firstName, this.lastName,
    this.company, this.address, this.addressExt, this.city,
    this.postalCode, this.password
    ).then((registerResponse) => {
      if (typeof registerResponse.status != 'undefined') {
        console.log("registration failed " + registerResponse.status);
        this.errorMessageUid = "User or eMail allready used";
        this.errorMessageEMail = "Please check if you you aready registered this eMail";
        return false;
      } else {
        console.log("registerUser " + this.userId + " registratered");  
        this.state.go('app.setup');            
        return true;
      }
    });
  }


  executeForm() {
    console.log('RegisterState execute submit');
    this.errorMessagePwd = null;
    this.errorMessageUid = null;
    this.errorMessageEMail = null;
    if (this.dataCheck() === true) {
     if (this.registerUser() === true) {
        console.log("user registratered");  
        this.state.go('app.setup');           
     };
   }
 }

}


export default [
'accountService',
'$state',
RegisterStateController
];
