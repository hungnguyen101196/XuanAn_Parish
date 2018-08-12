const ContactModel = require('../models/Contact');


module.exports = {
    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                console.log(data);
                let result = await ContactModel.create(data);
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