const NewsService = require('../services/NewsService');
const Codes = require('../configs/response');



module.exports = {
    index: async (req, res) => {
        res.render('news/index', {
            layout: 'news',
            title: "Cổng thông tin điện tử Giáo xứ Xuân An",
            logo: "/images/logos/Duomo-of-Milan-696x366.ico",
            activity: 'News'
        })
    },
    create: async (req, res) => {
        try {
            let result = NewsService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}