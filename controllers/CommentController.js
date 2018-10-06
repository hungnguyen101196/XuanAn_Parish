const CommentService = require('../services/CommentService');
const Codes = require('../constants/response');



module.exports = {
    index: async(req, res) => {
        res.render('Comment/index', { layout: 'comment', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    create: async(req, res) => {

        try {
            let result = CommentService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}