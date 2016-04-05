class UserService {

	constructor($http, apiiUrl) {
		this.$http = $http;
		this.apiiUrl = apiiUrl;
	}

     login(username, password) {
          return this.$http.post(
               this.apiiUrl + '/login', {
                    username: username,
                    password: password
               });
     }

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
 '$http',
 'apiUserUrl',
 UserService
 ];
