const ShareCornerModel = require('../models/ShareCorner');


module.exports = {
    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                console.log(data);
                let result = await ShareCornerModel.create(data);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    }
}