function en($translateProvider) {
    $translateProvider.translations('EN', {
        'subscribe-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
