const UserService = require('../services/UserService');
const Codes = require('../constants/response');
const isEmpty = require('is-empty');
const token = require('jsonwebtoken');
module.exports = {
    login: async(req, res) => {
        try {
            const data = req.body;
            if (!data) {
                return res.json({ Success: false, Status: 215, Message: Codes[215] })
            } else {
                let user = await UserService.checkUser(data);
                console.log(user)
                if (isEmpty(user)) {
                    return res.json({ Success: false, Status: 215, Message: Codes[215] })
                } else {
                    return res.json({ Success: true, Status: 205, Message: Codes[205], data: user })

                }
            }
        } catch (error) {
            console.log(error)
            return res.json({ Success: false, Status: 501, Message: Codes[501] })
        }
    }
}