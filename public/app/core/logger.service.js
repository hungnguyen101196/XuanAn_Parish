(function() {
    angular.module('app.core')
        .factory('logger', logger);

    logger.$inject = ['toastr'];

    function logger(toastr) {
        return {
            success: success,
            error: error,
            warning: warning,
            info: info
        }

        function success(message) {
            toastr.success(message, "Message")
        }

        function error(message) {
            toastr.error(message, "Message")
        }

        function warning(message) {
            toastr.warning(message, "Message")
        }

        function info(message) {
            toastr.info(message, "Message")
        }
    }
}());