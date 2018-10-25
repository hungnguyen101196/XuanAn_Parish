const UserGroupService = require('../services/UserGroupService');
const isEmpty = require('is-empty');
const {CODES} = require('../configs/response');
const {CreateValidator, UpdateValidator} = require('../validations/UserGroupValidator');
module.exports = {
    create: async(req,res) =>{
        try {
            req.checkBody(CreateValidator);
            const errors = req.validationErrors();
            if(errors){
                return res.json({success: false, message: CODES[501], error: errors})
            }
            let result = UserGroupService.create(req.body);
            if(!isEmpty(result)){
                return res.json({success: true, message: CODES[300], data: result})
            }else{
                return res.json({success: false, message: CODES[301]})
            }
        } catch (error) {
            return res.json({success: false, message: CODES[502]});
        }
    }
}