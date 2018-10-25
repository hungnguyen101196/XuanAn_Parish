const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const response = require('../configs/response');
const mongoosePaginate = require('mongoose-paginate');
const autoIncrement = require('mongoose-autoincrement-model');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

const CommentSchema = new Schema({
    InfoComment: {
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        PostId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "ShareCorner"
        },
        CommentContent: { type: String },
        CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
    },
    Status: { type: String, default: response.STATUS[200] }
});

autoIncrement.initialize(mongoose.connection);
CommentSchema.indexes({
    PostName: 1,Content: 1,UserId: 1
})
CommentSchema.plugin(mongoosePaginate)
CommentSchema.plugin(autoIncrement.plugin, {
    model: 'Comment',
    field: 'CommentId',
    StartAt: 0,
});

module.exports = mongoose.model('Comment', CommentSchema);