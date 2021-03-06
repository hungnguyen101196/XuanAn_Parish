const ParishInformationService = require('../services/ParishInfomationService');
const Codes = require('../configs/response');



module.exports = {
    index: async(req, res) => {
        res.render('ParishInformation/index', { layout: 'ParishInformation', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    create: async(req, res) => {
        try {
            let result = ParishInformationService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}