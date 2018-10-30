(function() {
    angular.module('XuanAnApp')
        .controller('LoginController', LoginController);


    LoginController.$inject = ['$scope', 'LoginService'];

    function LoginController($scope, LoginService) {
        $scope.validationOptions = {
            errorElement: 'span',
            errorClass: 'help-block',
            rules: {
                UserName: {
                    required: true,
                    email: true
                },
                Password: {
                    required: true,
                    minlength: 6
                }
            },
            UserName: {
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                },
                Password: {
                    required: "You must enter a password",
                    minlength: "Your password must have a minimum length of 6 characters"
                }
            }
        };
        $scope.login = function(form) {
            if ($scope.formSignIn.validate()) {
                LoginService.login($scope.formLogin).then((response) => {
                    if (response.data.success) {
                        window.location.href = "/admin";
                    }
                }).catch((err) => console.log(err))
            } else {
                alert('sdfd')
            }

        };
    }
}())