module.exports.UserValidator = {
    UserName: {
        notEmpty: true,
        min: 6
    },
    Password: {
        notEmpty: true,
        min: 6
    },
    Email: {
        notEmpty: true,
        email: true
    },
    Mobile: {
        notEmpty: true,
        number: true,
        min: 10,
        max: 10
    },
    Address: {
        notEmpty: true,
    }
}
module.exports.LoginValidator = {
    UserName: {
        notEmpty: true,
        errorMessage: "UserName is required",

    },
    Password: {
        notEmpty: true,
        errorMessage: "Password is required"
    }
}