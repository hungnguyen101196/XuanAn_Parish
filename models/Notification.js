const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    NotificatonName: { type: String, required: true },
    Content: { type: String, required: true },
    Poster: { type: String, required: true },
    ProfileImage: { type: String, required: true },
    PostedDate: { type: String, required: true },
});

module.exports = mongoose.model('Notification', NotificationSchema);