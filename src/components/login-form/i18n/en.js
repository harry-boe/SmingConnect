function en($translateProvider) {
    $translateProvider.translations('EN', {
        'login-form-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
