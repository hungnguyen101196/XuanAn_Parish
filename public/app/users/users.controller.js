(function() {
    angular.module('XuanAnApp')
        .controller('UsersController', UsersController);


    UsersController.$inject = ['$scope', 'UsersService', 'logger'];

    function UsersController($scope, UsersService, logger) {
        $scope.list = function() {
            UsersService.list().then((response) => {
                if (response.Success) {
                    logger.success(response.Message)
                    $scope.users = response.data;
                } else {
                    logger.error(response.Message)
                }
            }).catch((err) => console.log(err))
        };
        $scope.list();
    }
}())