const CommentService = require('../services/CommentService');
const Codes = require('../configs/response');



module.exports = {
    index: async (req, res) => {
        res.render('Comment/index', {
            layout: 'comment',
            title: "Cổng thông tin điện tử Giáo xứ Xuân An",
            logo: "/images/logos/Duomo-of-Milan-696x366.ico",
            activity: 'Comment'
        })
    },
    create: async (req, res) => {

        try {
            let result = CommentService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}