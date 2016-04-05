function en($translateProvider) {
    $translateProvider.translations('EN', {
        'signup-form-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
