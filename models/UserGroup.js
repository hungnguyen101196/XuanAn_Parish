const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const response = require('../configs/response');


const UserGroupSchema = new Schema({
    GroupName: { type: String, required: true, enum:['Administrator', 'Member', 'User'] },
    Status: { type: String, default: response.STATUS[200] },
    CreatedDate: { type: String},
    UpdatedDate: { type: String },
});

module.exports = mongoose.model('UserGroup', UserGroupSchema)