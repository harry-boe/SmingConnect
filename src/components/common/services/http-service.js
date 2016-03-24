import _ from 'lodash';

class HttpService {

	constructor($http, apiBaseUrl) {
		this.http = $http;
		this.baseUrl = apiBaseUrl;
	}

	configureRequest(type, url, params, data, headers) {
		params = _.assign({}, params);

		Object.keys(params).forEach(function (key) {
			let placeholder = `:${key}`;

			if (url.indexOf(key) > -1) {
				url = url.replace(placeholder, params[key]);
				delete params[key];
			}
		});

		return {
			url: this.baseUrl + url,
			method: type.toUpperCase(),
			responseType: 'text',
			params: params,
			data: data,
			headers: headers
		};
	}

	_sendRequest(type, url, params, data, headers = {}) {
		var requestConfiguration = this.configureRequest(
			type,
			url,
			params,
			data,
			headers
			);

		return this
		.http(requestConfiguration)
		.then(function (response) {
			console.log(response);
			return response.data;
		})
		.catch(function (err) {
			console.error(err.stack);
			return err;
		});
	}

	post({url, params = {}, data = null, headers = {}}) {
		return this._sendRequest(
			'post',
			url,
			params,
			data,
			headers
			);
	}

}

export default [
'$http',
'apiBaseUrl',
HttpService
];