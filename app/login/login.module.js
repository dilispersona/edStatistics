(function(){
    'use strict';

    angular.module('edApp.login', ['ngRoute','blocks.servers'])
        .config(config);

    function config($routeProvider)
    {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        });
    };

}());


