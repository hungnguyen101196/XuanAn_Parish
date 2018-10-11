const NotificationModel = require('../models/Notification');
const { STATUS } = require('../configs/response');

module.exports = {
    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                console.log(data);
                let result = await NotificationModel.create(data);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
    update: async(data) => {
        console.log(data)
        try {
            if (data) {
                console.log(data);
                let condition = {
                    _id: data.id
                }

                let options = {
                    new: true
                }
                let result = await NotificationModel.update(condition, data, options);
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
        console.log(data)
        try {
            if (data) {
                let result = await NotificationModel.find(data);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
    findNotification: async(data) => {
        try {
            if (data) {
                let condition = {
                    _id: data.id
                }
                let result = await NotificationModel.findOne(condition);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
    delete: async(data) => {
        console.log(data)
        try {
            if (data) {
                let condition = {
                    _id: data.id
                }
                let query = {
                    Status: STATUS[202]
                }
                let result = await NotificationModel.update(condition, query);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
}