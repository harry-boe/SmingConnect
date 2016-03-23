function defaultLanguageConfig($translateProvider) {
    $translateProvider.preferredLanguage('EN');
}

export default [
    '$translateProvider',
    defaultLanguageConfig
];
