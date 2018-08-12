const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShareCornerSchema = new Schema({
    PostName: { type: String, required: true },
    Content: { type: String, required: true },
    Poster: { type: String, required: true },
    UserName: { type: String, required: true },
    Image: { type: String },
    PostedDate: { type: Date, required: true },
});

module.exports = mongoose.model('ShareCorner', ShareCornerSchema);