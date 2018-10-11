const NotificationService = require('../services/NotificationService');
const Codes = require('../configs/response');



module.exports = {
    index: async(req, res) => {
        res.render('notification/index', { layout: 'notification', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    list: async(req, res) => {
        try {
            let result = NotificationService.list(req.body);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    },
    create: async(req, res) => {
        try {
            let result = NotificationService.create(req.body);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    },
    update: async(req, res) => {
        try {
            let result = NotificationService.update(req.body);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    },
    info: async(req, res) => {
        try {
            let result = NotificationService.findNotification(req.body);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    },
    delete: async(req, res) => {
        try {
            let result = NotificationService.delete(req.body);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}