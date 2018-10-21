(function() {
    angular.module('app.core')
        .config(["toastrConfig", function(toastrConfig) {
            var options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "positionClass": "toast-bottom-left",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            angular.extend(toastrConfig, options);
        }])
}());