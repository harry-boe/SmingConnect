class UserStateController {

	constructor(userService, $state, $scope, $mdDialog) {
		console.log("UserStateController constructor(userService, $state)");
    	this.userService = userService;
    	this.state = $state;
    	this.scope = $scope;
    	this.mdDialog = $mdDialog;
    	this.showDialog();
	}

    showDialog() {
	   console.log("UserStateController showDialog($event)");
       var parentEl = angular.element(document.body);
       this.mdDialog.show({
         parent: parentEl,
//         targetEvent: $event,
         template: '<login-form></login-form>'
      });
   }

   isNotLoggedIn() {
      console.log("check for login");
      return true;
   }

}

export default [
	'userService',
	'$state',
	'$scope',
	'$mdDialog',
    UserStateController
];
