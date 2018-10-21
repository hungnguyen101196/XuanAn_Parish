(function() {
    angular.module('XuanAnApp')
        .service('UsersService', UsersService);
    UsersService.$inject = ['$http'];

    function UsersService($http) {
        this.list = function() {
            return $http.get('/admin/users/list').then((response) => {
                return response.data
            }).catch((err) => { return err; })
        };

    }
}());