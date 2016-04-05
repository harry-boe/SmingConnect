function en($translateProvider) {
    $translateProvider.translations('EN', {
        'service-entry-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
