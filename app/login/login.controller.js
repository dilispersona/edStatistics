(function(){
"use strict";
    angular.module('edApp.login')
        .controller("LoginController",LoginController);

     LoginController.$inject = [];
 function LoginController(){
    /*jshint validthis : true */
    var vm = this;
    vm.email = "";
    vm.psswd = "";
    vm.submitForm = submitForm;
    vm.login = login;


     function submitForm(isValid){
        if(isValid){
            console.log(vm);
            login(vm.email,vm.passwd,function(err,data){
                console.log(data);
            });
        }
     };

     function login(email,password,callback){

     };



 };

}());