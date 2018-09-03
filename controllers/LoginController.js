const UserService = require('../services/UserService');
const Codes = require('../constants/response');
const isEmpty = require('is-empty');
const token = require('jsonwebtoken');
module.exports = {
    login: async(req, res) => {
        try {
            const user = req.body;
            if (!user) {
                return res.json({ Success: false, Status: 215, Message: Codes[215] })
            } else {
                let result = await UserService.checkUser(user);
                if (!result) {
                    return res.json({ Success: false, Status: 215, Message: Codes[215] })
                } else {
                    return res.json({ Success: true, Status: 205, Message: Codes[205] })
                }
            }
        } catch (error) {
            return res.json({ Success: false, Status: 501, Message: Codes[501] })
        }
    }
}