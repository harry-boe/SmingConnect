import angular from 'angular';
import UserService from './services/user-service';
import AuthService from './services/auth-service';
import ApplicationServiceService from './services/app-service-service';
import ImageService from './services/image-service';


const dependencies = [
];

export default angular
    .module('common', dependencies)
    .service('userService', UserService)
    .service('authService', AuthService)
    .service('appServiceService', ApplicationServiceService)
    .service('imageService', ImageService);

