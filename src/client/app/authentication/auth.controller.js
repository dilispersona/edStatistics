(function(){

    "use strict";

    angular
        .module('app.auth')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['configServers','authService'];

    function LoginCtrl(configServers,authService){

        var vm = this;
        vm.email = '';
        vm.password = '';
        vm.submitForm = submitForm;

        function submitForm(isValid){
            if(isValid){
                console.log(vm);
                login(vm.email,vm.passwd,function(err,data){
                    console.log(data);
                });
            }
        }

        function login(email,password,callback){
            var link, postData = "", auth_data, index;


            link = configServers.servers().authentication_server + "/token";
            postData = 'password=' + password;
            postData += '&username='+ email;
            postData += '&grant_type=password&scope=read write&client_secret=dqECeHabHrNGqU5T&client_id=web_app';
            postData = encodeURI(postData);
            authService.sendEcnodedPostRequest(link,postData,function(err,data){
                if(!err){
                    console.log(data);
                }
            });

        }





    };

}());