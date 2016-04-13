class UserService {

	constructor(localStorageService, $q, $http, apiiUrl, $mdDialog) {
          console.log("call UserService constructor");
          this.localStorageService = localStorageService;
		this.$http = $http;
		this.apiiUrl = apiiUrl;
          this.$q = $q;
          this.mdDialog = $mdDialog;


          var storageType = localStorageService.getStorageType(); //e.g localStorage
          console.log("Local Storage Type :" + storageType);
          // create user variable
//          var user = $rootScope.user;;
	}

     isAuthenticated() {
        return this.localStorageService.get('user');
     }


     isLoggedIn() {
          var user = this.localStorageService.get('user');
          console.log("isLoggedIn = " + user);

          if(user != 'undefined' && this.localStorageService.get('user')) {
               return true;
          } else {
               return false;
          }
     }

     handleLogin() {
          console.log("Handle login()");
          if (this.isAuthenticated()) return true;
          var parentEl = angular.element(document.body);
          this.mdDialog.show({
               parent: parentEl,
               template: '<login-form></login-form>'
          });
          return this.isAuthenticated();
     }

     login(username, password) {
       // create a new instance of deferred
          var deferred = this.$q.defer();

          return this.$http.post(
               this.apiiUrl + '/login', {
                    username: username,
                    password: password
               }).then((loginSuccees) => {
                    console.log("login success set user");
               //     this.user = true;
                    this.localStorageService.set('user', true);
//                    this.user = true;
                    deferred.resolve();
               }, (loginError) => {
                    console.log("login error clear user");
                    this.localStorageService.set('user', false);
//                    this.user = false;
//                    this.user = false;
                    deferred.reject();
               });

          // return promise object
          return deferred.promise;
     };


     signup(username, eMail, firstName, lastName, company, address, addressExt, country, countryState, city, postalCode, password) {
     	return this.$http.post(
               this.apiiUrl + '/signup', {
     			username: username,
     			eMail: eMail,
     			firstName: firstName,
     			lastName: lastName,
     			company: company,
     			address: address,
     			addressExt: addressExt,
                    country: country,
                    countryState: countryState,
     			city: city,
     			postalCode: postalCode,
     			password: password
               });
     	}
     }



 export default [
 'localStorageService',
 '$q',
 '$http',
 'apiUserUrl',
 '$mdDialog',
 UserService
 ];
