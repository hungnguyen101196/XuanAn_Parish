const NewsService = require('../services/NewsService');
const Codes = require('../constants/response');



module.exports = {
    index: async(req, res) => {
        res.render('news/index', { layout: 'news', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    create: async(req, res) => {
        try {
            let result = NewsService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}