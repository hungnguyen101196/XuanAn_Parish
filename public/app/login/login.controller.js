(function() {
    angular.module('XuanAnApp')
        .controller('LoginController', LoginController);


    LoginController.$inject = ['$scope', 'LoginService', 'LoginValidator'];

    function LoginController($scope, LoginService, LoginValidator) {
        $scope.formValidation = LoginValidator.validationOptions();
        $scope.login = function(form) {
            if(form.validate()){
                LoginService.login($scope.formLogin).then((response) => {
                    
                    console.log(response)
                    if (response.success) {
                        window.location.href = "/admin"
                    }else{
                        $scope.message = response.message;
                        $scope.alertClass = "alert-danger";
                        $scope.alertShow = true;
                    }
                }).catch((err) => console.log(err))
            }
        };

        $scope.register = function(form) {
           // if(form.validate()){
                LoginService.register($scope.formSignUp).then((response) => {
                    console.log(response)
                    // if (response.success) {
                    //     window.location.href = "/admin"
                    // }else{
                    //     $scope.message = response.message;
                    //     $scope.alertClass = "alert-danger";
                    //     $scope.alertShow = true;
                    // }
                }).catch((err) => console.log(err))
            // }else{
                
            // }
            
        };
    }
}())