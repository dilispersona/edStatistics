    (function () {
        'use strict';

        angular
            .module('app', [
                'ngAnimate',
                'ngRoute',
                'app.core',
                'app.auth'])
            .config(routeConfig);
        
        routeConfig.$inject = ['$routeProvider'];

        function routeConfig($routeProvider){
                $routeProvider
                    .when('/login',{
                        templateUrl:'app/authentication/login.html',
                        controller:'LoginCtrl',
                        controllerAs:'vm',
                        title:'Login'
                    })
                    .when('/projects',{

                    })
                    .otherwise({
                       redirectTo:'/login'
                    });
        }


    })();