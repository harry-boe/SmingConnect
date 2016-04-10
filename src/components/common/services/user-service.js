class UserService {

	constructor($rootScope, $q, $http, apiiUrl) {
          console.log("call UserService constructor");
          this.rootScope = $rootScope
		this.$http = $http;
		this.apiiUrl = apiiUrl;
          this.$q = $q;
          // create user variable
//          var user = $rootScope.user;;
	}

     isLoggedIn() {
          console.log("isLoggedIn = " + this.rootScope.user);
          if(this.rootScope.user) {
          return true;
          } else {
          return false;
          }
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
                    this.rootScope.user = true;
                    deferred.resolve();
               }, (loginError) => {
                    console.log("login error clear user");
                    this.rootScope.user = false;
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
 '$rootScope',
 '$q',
 '$http',
 'apiUserUrl',
 UserService
 ];
