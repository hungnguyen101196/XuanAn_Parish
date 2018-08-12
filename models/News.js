const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    PostName: { type: String, required: true },
    Content: { type: String, required: true },
    Poster: { type: String, required: true },
    ProfileImage: { type: String, required: true },
    PostedDate: { type: Date, required: true },
});

module.exports = mongoose.model('News', NewsSchema);