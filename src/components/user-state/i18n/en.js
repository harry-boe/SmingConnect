function en($translateProvider) {
    $translateProvider.translations('EN', {
        foo: 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
