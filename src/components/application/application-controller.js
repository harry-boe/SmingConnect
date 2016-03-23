class ApplicationController {

    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    toggle() {
        this.$mdSidenav('applicationNavigation').toggle();
    }
}

export default [
    '$mdSidenav',
    ApplicationController
];