(function() {
    angular.module('XuanAnApp')
        .controller('LoginController', LoginController);


    LoginController.$inject = ['$scope', 'LoginService', 'toastr'];

    function LoginController($scope, LoginService, toastr) {
        $scope.login = function() {
            LoginService.login($scope.formLogin).then((response) => {
                if (response.data.success) {
                    window.location.href = "/admin"
                }
            }).catch((err) => console.log(err))
        };
    }
}())