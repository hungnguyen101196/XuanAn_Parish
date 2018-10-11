module.exports.UserValidator = {
    UserName: {
        required: true,
        min: 6
    },
    Password: {
        required: true,
        min: 6
    },
    Password: {
        required: true,
        email: true
    },
    Mobile: {
        required: true,
        number: true,
        min: 10,
        max: 10
    },
    Address: {
        required: true
    }
}