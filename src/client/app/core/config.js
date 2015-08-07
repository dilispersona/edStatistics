(function(){

    "use strict";

    angular.module('app.core')
        .factory('configServers',configServers);

    function configServers(){

        var service = {
            servers: servers
        };

        return service;
        //////////////////////////////

        function servers(){
            return servers = {
                elastic_search_server: "/api/v1/search",
                couch_db_server: "/api/v1/securedata",
                //couch_db_server: "/api/v1/db",
                license_server: "/api/v1/licenseserver",
                tile_server: "/api/v1/tiles",
                print_server: "/api/v1/print",
                project_creation_server: "/api/v1/projectcreation",
                authentication_server: "/api/v1/oauth"
            };
        }




    };

}());
