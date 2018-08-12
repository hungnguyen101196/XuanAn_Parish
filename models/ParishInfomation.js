const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParishInformationSchema = new Schema({
    ParishName: { type: String, required: true },
    EstablishDate: { type: String, required: true },
    Introduce: { type: String, required: true },
    ParishPriest: { type: String, required: true },
    Avatar: { type: String, required: true },
    ParishImage: { type: String, required: true }
});

module.exports = mongoose.model('ParishInformation', ParishInformationSchema);