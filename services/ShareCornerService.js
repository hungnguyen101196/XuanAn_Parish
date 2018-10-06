const ShareCornerModel = require('../models/ShareCorner');
const mongoose = require('mongoose')

module.exports = {

    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                let result = await ShareCornerModel.create(data);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
    list: async(data) => {
        try {
            if (data) {
                console.log(data)

                let result = await ShareCornerModel.find(data).populate({
                    path: "UserId",
                    select: "UserName Info.FullName"
                });
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