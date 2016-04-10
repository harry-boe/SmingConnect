
import HttpResponseError from './HttpResponseError';

function httpInterceptor ($httpProvider) {
    $httpProvider.interceptors.push(HttpResponseError);
}

export default [
    '$httpProvider',
    httpInterceptor
];
