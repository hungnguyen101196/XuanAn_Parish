(function() {
    angular.module('XuanAnApp')
        .controller('LoginController', LoginController);


    LoginController.$inject = ['$scope', 'LoginService', 'toastr'];

    function LoginController($scope, LoginService, toastr) {
        toastr.error('a toast message...');
        $scope.login = function() {
            LoginService.login($scope.formLogin).then((response) => {
                console.log(response)
                if (response.data.success) {
                    window.location.href = "/admin"
                }
            }).catch((err) => console.log(err))
        };
        $scope.register = function() {
            LoginService.register().then((response) => {
                console.log(response);
            }).catch(err => console.log(err))
        }
    }
}())