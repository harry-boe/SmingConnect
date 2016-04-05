class CaRootCertEntryComponentController {

	constructor(accountService, $state, $mdToast) {
		console.log('constructor CaRootCertEntryComponentController');

    	this.accountService = accountService;
    	this.state = $state;
    	this.msToast = $mdToast;

    	this.cn = 'my Common name';
    	this.eMail = "jd@nowhre.net";
	}

	executeForm() {
		console.log('perform execute form CaRootCertEntryComponentController');
  	}


}

export default [
	'accountService',
	'$state',
	'$mdToast',
    CaRootCertEntryComponentController
];
