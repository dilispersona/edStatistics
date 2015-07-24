(function(){
    'use strict';
    angular.module("edApp",['ngRoute',
        'edApp.login',
        'myApp.view2',
        'myApp.version'

        ]).
        config(config);

    function config($routeProvider){
        $routeProvider.otherwise({redirectTo: '/login'});
    }
}());