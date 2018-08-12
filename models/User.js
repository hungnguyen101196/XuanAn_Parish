const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName: { type: String, required: true },
    Password: { type: String, required: true },
    Info: {
        FullName: { type: String, required: true },
        BirthDate: { type: Date, required: true },
        FatherName: { type: String, required: true },
        MotherName: { type: String, required: true },
        Address: { type: String, required: true }
    },
    roles: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);