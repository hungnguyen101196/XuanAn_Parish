const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const response = require('../constants/response');
const bcrypt = require('bcrypt');
const beautifulUnique = require('mongoose-beautiful-unique-validation');
const uniqueValidator = require('mongoose-unique-validator');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

const UserSchema = new Schema({
    UserName: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Info: {
        FullName: { type: String, required: true },
        BirthDate: { type: String, required: true },
        FatherName: { type: String, required: true },
        MotherName: { type: String, required: true },
        Address: { type: String, required: true }
    },
    Status: { type: String, default: response.STATUS[200] },
    CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
    UpdateDate: { type: String },
    roles: { type: String, required: true }
});

UserSchema.plugin(beautifulUnique);
UserSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, 14, null);
};

UserSchema.method.comparePassword = function(password) {
    bcrypt.compare(password, hashPassword).then(function(res) {
        return res;
    })
}

module.exports = mongoose.model('User', UserSchema);