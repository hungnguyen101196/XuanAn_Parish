module.exports.UserCreateValidator = {
    UserName: {
        notEmpty: true,
        min: 6,
        errorMessage: "UserName is required"
    },
    Password: {
        notEmpty: true,
        min: 6,
        errorMessage: "Password is required"
    },
    "Info.Address": {
        notEmpty: true,
        errorMessage: "Address is required"
    },
    "Info.MotherName": {
        notEmpty: true,
        errorMessage: "Mother name is required"
    },
    "Info.FatherName": {
        notEmpty: true,
        errorMessage: "Father name is required"
    },
    "Info.FullName": {
        notEmpty: true,
        errorMessage: "Full name is required"
    },
    Roles: {
        notEmpty: true,
        errorMessage: "Roles is required",
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