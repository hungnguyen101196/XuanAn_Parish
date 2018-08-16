const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

const ParishInformationSchema = new Schema({
    ParishName: { type: String, required: true },
    EstablishDate: { type: String, required: true },
    Introduce: { type: String, required: true },
    ParishPriest: { type: String, required: true },
    Avatar: { type: String, required: true },
    ParishImage: { type: String, required: true },
    CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
    UpdateDate: { type: String },
});

module.exports = mongoose.model('ParishInformation', ParishInformationSchema);