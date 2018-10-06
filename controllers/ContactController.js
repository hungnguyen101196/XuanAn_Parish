const ContactService = require('../services/ContactService');
const Codes = require('../constants/response');



module.exports = {
    index: async(req, res) => {
        res.render('contact/index', { layout: 'contact', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
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