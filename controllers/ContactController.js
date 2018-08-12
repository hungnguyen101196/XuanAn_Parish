const ContactService = require('../services/ContactService');
const Codes = require('../constants/response');



module.exports = {
    create: async(req, res) => {
        try {
            let result = ContactService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}