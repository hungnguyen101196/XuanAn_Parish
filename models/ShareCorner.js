const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const response = require('../configs/response');
const autoIncrement = require('mongoose-autoincrement-model');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

const ShareCornerSchema = new Schema({
    PostName: { type: String, required: true },
    Content: { type: String, required: true },
    UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    Status: { type: String, default: response.STATUS[200] },
    Image: { type: String },
    CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
});

autoIncrement.initialize(mongoose.connection);

ShareCornerSchema.plugin(autoIncrement.plugin, {
    model: 'ShareCorner',
    field: 'PostId',
    StartAt: 0,
});

module.exports = mongoose.model('ShareCorner', ShareCornerSchema);