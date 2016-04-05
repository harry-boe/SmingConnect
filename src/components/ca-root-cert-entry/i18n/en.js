function en($translateProvider) {
    $translateProvider.translations('EN', {
        'ca-root-cert-entry-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
