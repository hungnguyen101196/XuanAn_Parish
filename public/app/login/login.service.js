(function() {
    angular.module('XuanAnApp')
        .service('LoginService', LoginService);
    LoginService.$inject = ['$http'];

    function LoginService($http) {
        this.login = function(data) {
            return $http.post('/signin', data).then((response) => {
                return response.data;
            }).catch((err) => { return err; })
        };

        this.register = function(data) {
            return $http.post('/admin/user/create', data).then((response) => {
                return response.data;
            }).catch(err => { return err; })
        }
    }
}());