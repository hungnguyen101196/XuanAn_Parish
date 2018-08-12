const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    ParishName: { type: String, required: true },
    Email: { type: String, required: true },
    Introduce: { type: String, required: true },
    Phone: { type: String, required: true },
    Address: { type: String, required: true },
});

module.exports = mongoose.model('Contact', ContactSchema);