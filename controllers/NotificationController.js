const NotificationService = require('../services/NotificationService');
const Codes = require('../constants/response');



module.exports = {
    index: async(req, res) => {
        res.render('notification/index', { layout: 'notification', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    create: async(req, res) => {
        try {
            let result = NotificationService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}