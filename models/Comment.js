const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    InfoComment: {
        UserId: { type: String, required: true },
        UserName: { type: String, required: true },
        PostId: { type: String, required: true },
        CommentContent: { type: String, required: true },
        CommentDate: { type: String, required: true }
    }
});

module.exports = mongoose.model('Comment', CommentSchema);