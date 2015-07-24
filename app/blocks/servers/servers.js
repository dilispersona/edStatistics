(function(){

    angular.module('blocks.servers')
        .factory('servers',servers);

    function servers(){


       var servers = {
            elastic_search_server: "/api/v1/search",
            couch_db_server: "/api/v1/securedata",
            //couch_db_server: "/api/v1/db",
            license_server: "/api/v1/licenseserver",
            tile_server: "/api/v1/tiles",
            print_server: "/api/v1/print",
            project_creation_server: "/api/v1/projectcreation",
            authentication_server: "/api/v1/oauth"

        };
        return servers;
    }


}());