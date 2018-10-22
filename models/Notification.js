const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const response = require('../configs/response');
const autoIncrement = require('mongoose-autoincrement-model');
const mongoosePaginate = require('mongoose-paginate');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

const NotificationSchema = new Schema({
    NotificatonName: { type: String, required: true },
    Content: { type: String, required: true },
    UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    Status: { type: String, default: response.STATUS[200] },
    ProfileImage: { type: String, required: true },
    CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
    UpdateDate: { type: String },
});

autoIncrement.initialize(mongoose.connection);
NotificationSchema.plugin(mongoosePaginate)
NotificationSchema.indexes({
    NotificatonName: 1,Content: 1,UserId: 1
})
NotificationSchema.plugin(autoIncrement.plugin, {
    model: 'Notification',
    field: 'NotificationId',
    StartAt: 0,
});

module.exports = mongoose.model('Notification', NotificationSchema);