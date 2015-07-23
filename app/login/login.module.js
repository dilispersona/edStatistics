(function(){
    'use strict';

    angular.module('edApp.login', ['ngRoute'])
        .config(config);

    function config($routeProvider)
    {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        });
    };

}());


