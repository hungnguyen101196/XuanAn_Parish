const UserModel = require('../models/User');


module.exports = {
    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                console.log(data);
                let result = await UserModel.create(data);
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