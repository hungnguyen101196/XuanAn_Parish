const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const response = require('../configs/response');
const mongoosePaginate = require('mongoose-paginate')
const autoIncrement = require('mongoose-autoincrement-model');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

const NewsSchema = new Schema({
    PostName: { type: String, required: true },
    Content: { type: String, required: true },
    UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    Status: { type: String, default: response.STATUS[200] },
    ProfileImage: { type: String, required: true },
    CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
    UpdateDate: { type: String },
});

autoIncrement.initialize(mongoose.connection);
NewsSchema.plugin(mongoosePaginate);
NewsSchema.indexes({
    PostName: 1,Content: 1,UserId: 1
})
NewsSchema.plugin(autoIncrement.plugin, {
    model: 'News',
    field: 'NewsId',
    startAt: 1,
    incrementBy: 1
});
module.exports = mongoose.model('News', NewsSchema);