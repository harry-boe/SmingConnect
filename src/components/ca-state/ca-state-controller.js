class CaStateController {

	constructor($state, $mdToast) {
	    this.state = $state;
	    this.mdToast = $mdToast;

	    this.showCreateRoot = true;
	};

	executeForm() {

	}

}

export default [
	'$state', 
	'$mdToast',
    CaStateController
];
