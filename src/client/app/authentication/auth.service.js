(function(){
    "use strict";

    angular.module('app.auth')
        .factory('authService',authService);

    authService.$inject = ['$http'];

    function authService($http){

        var service = {
            sendEcnodedPostRequest:sendEcnodedPostRequest
        };
        return service;

        /////////////////////////////////////

        function sendEcnodedPostRequest(link,postData,callback){
            $.ajax({
                url: link,
                type: "POST",
                dataType: "JSON",
                data: postData,
                contentType: 'application/x-www-form-urlencoded',
                success : function (data) {
                    callback(undefined, data);
                },
                error: function (XHR) {
                    callback(getErrorObject(XHR), undefined);
                }
            });
        }
    }

}());