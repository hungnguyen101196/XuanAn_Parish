const {isObjectId} = require('../libs/shared');
const CreateValidator = {
    GroupName:{
        notEmpty: true,
        errorMessage: "GroupName is required",
    }
}
const UpdateValidator = {
    GroupName:{
        notEmpty: true,
        errorMessage: "GroupName is required",
    },
    UserGroupObjectId:{
        notEmpty: true,
        errorMessage: "UserGroupObjectId is required",
        custom: {
            options: value => isObjectId(value),
            errorMessage: "UserGroupObjectId invalid"
        }
    }
}
module.exports = {
    CreateValidator,UpdateValidator
}