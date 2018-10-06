(function(){
    angular.module('XuanAnApp',[])
            .service('LoginService', LoginService)
            .controller('LoginController', LoginController);
            function LoginService($http) {
                this.login = function (data) {
                    return $http.post('/login', data).then((response) => {
                        return response
                    }).catch((err) => { return err; })
                };

                this.register = function(){
                    return $http.post('/register').then((response) => {
                        return response;
                    }).catch(err => {return err;})
                }
            }
        LoginController.$inject = ['$scope', 'LoginService'];
        function LoginController($scope, LoginService){
            $scope.login = function(){
                $scope.data = {
                    UserName: 'Nguyenhung',
                    Password: 'Nguyenhung'
                };
                LoginService.login($scope.data).then((response) => {
                    console.log(response)
                }).catch((err) => console.log(err))
            };
            $scope.register = function(){
                LoginService.register().then((response) => {
                    console.log(response);
                }).catch(err => console.log(err))
            }
        }
}())