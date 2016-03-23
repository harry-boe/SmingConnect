function en($translateProvider) {
    $translateProvider.translations('EN', {
        'login-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
