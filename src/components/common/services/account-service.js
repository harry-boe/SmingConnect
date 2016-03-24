class AccountService {

	constructor(httpService, baseUrl) {
		console.log("construct Account Service");
		this.httpService = httpService;
		this.baseUrl = baseUrl;
	}

    /**
     * Configures the HttpService instance, so that it can be used for rest services.
     */
     getConfiguredHttpService() {
     	this.httpService.baseUrl = this.baseUrl;
     	return this.httpService;
     }

     register(userId, eMail, firstName, lastName, company, address, addressExt, city, postalCode, password) {
     	return this.getConfiguredHttpService().post({
     		url: '/account/register',
     		data: {
     			userId: userId,
     			eMail: eMail,
     			firstName: firstName,
     			lastName: lastName,
     			company: company,
     			address: address,
     			addressExt: addressExt,
     			city: city,
     			postalCode: postalCode,
     			password: password}
     		}).then(function (registerResponse) {
     			console.log(registerResponse);
     			return registerResponse;
     		});
     	}
     }



 export default [
 'http',
 'apiBaseUrl',
 AccountService
 ];
