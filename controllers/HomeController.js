const CommentService = require('../services/CommentService');
const Codes = require('../configs/response');



module.exports = {
    index: async (req, res) => {
        res.render('home/index', {
            layout: 'home',
            title: "Cổng thông tin điện tử Giáo xứ Xuân An",
            logo: "/images/logos/Duomo-of-Milan-696x366.ico",
            activity: 'Home'
        })
    },
}