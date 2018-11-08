const mongoose = require('mongoose');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh");

module.exports = {
    generatorTime: () => {
        let date = new Date();
        date = moment(date).format('dd-mm-yyyy hh-mm-ss');
        return date;
    },
    formatDate: date => moment(date).format('dd-mm-yyyy'),
    isObjectId: (id) => mongoose.Types.ObjectId.isValid(id) && typeof id !== 'number',
}