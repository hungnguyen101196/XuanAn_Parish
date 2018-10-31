(function() {
    angular.module('XuanAnApp')
        .factory('LoginValidator', function() {
            let factoryObj = {};
            factoryObj.validationOptions = function() {
                return {
                    errorElement: 'span', //default input error message container
                    errorClass: 'error-block', // default input error message class
                    rules: {
                        UserName: {
                            required: true,
                        },
                        Password: {
                            required: true,
                        },
                    },
                    messages: {
                        UserName: {
                            required: "UserName is not empty",
                        },
                        Password: {
                            required: "Password is not empty",
                        },
                    },
                    errorPlacement: function(error, element) { // render error placement for each input type
                        element.after(error);
                        return true;
                    },
                    highlight: function(element) { // hightlight error inputs
                        $(element).closest('.md-form').removeClass("has-success").addClass('has-error'); // set error class to the control group
                    },
                    unhighlight: function(element) { // revert the change done by hightlight
                        $(element).closest('.md-form').removeClass('has-error'); // set error class to the control group
                    },
                    success: function(label, element) {
                        $(element).closest('.md-form').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    },
                    submitHandler: function(form) {
                        return false;
                    }
                }
            }
            return factoryObj;
        })
}());