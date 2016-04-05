class AccountService {

	constructor($http, baseUrl) {
		this.$http = $http;
		this.baseUrl = baseUrl;
	}

     register(userId, eMail, firstName, lastName, company, address, addressExt, userCountry, userState, city, postalCode, password) {
     	return this.$http.post(
               this.baseUrl + '/register', {
     			userId: userId,
     			eMail: eMail,
     			firstName: firstName,
     			lastName: lastName,
     			company: company,
     			address: address,
     			addressExt: addressExt,
                    userCountry: userCountry,
                    userState: userState,
     			city: city,
     			postalCode: postalCode,
     			password: password
               });
     	}
     }



 export default [
 '$http',
 'apiAccountUrl',
 AccountService
 ];
