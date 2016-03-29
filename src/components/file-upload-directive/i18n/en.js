function en($translateProvider) {
    $translateProvider.translations('EN', {
        'file-upload-directivefoo': 'bar'
    });
}

export default [
    '$translateProvider',
    en
];
