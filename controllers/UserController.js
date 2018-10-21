const UserService = require('../services/UserService');
const { CODES } = require('../configs/response');
const isEmpty = require('is-empty');
const { validationResult } = require('express-validator/check');
const { UserValidator } = require('../validations/UserValidator')
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

module.exports = {
    index: async(req, res) => {
        res.render('user/index', { layout: 'user', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    create: async(req, res) => {
        try {
            const error = validationResult(UserValidator(req.body));
            if (error) {
                return res.json({ Success: false, StatusCode: 501, Message: CODES[501] });
            }
            const UserName = {
                UserName: req.body.UserName
            };
            let user = await UserService.findUser(UserName);
            if (isEmpty(user)) {
                let result = await UserService.create(req.body);
                if (result) {
                    return res.json({ Success: true, StatusCode: 201, Message: CODES[201], data: result });
                } else {
                    return res.json({ Success: false, StatusCode: 205, Message: CODES[205] });
                }
            } else {
                return res.json({ Success: false, StatusCode: 209, Message: rCODES[209] });
            }
        } catch (error) {
            return res.json({ Success: false, StatusCode: 501, Message: CODES[501] });
        }
    },
    update: async(req, res) => {
        try {
            const id = {
                _id: req.body._id
            };
            let user = await UserService.findUser(id);
            if (!user.name) {
                if (!isEmpty(user)) {
                    const set = {
                        _id: req.body._id,
                        UpdateDate: moment(new Date(Date.now())).format('DD-MM-YYY HH:mm')
                    };
                    if (req.body.UserName) {
                        set.UserName = req.body.UserName;
                    };
                    let result = await UserService.update(set);
                    if (!isEmpty(result)) {
                        return res.json({ Success: true, StatusCode: 202, Message: CODES[202], data: result });
                    } else {
                        return res.json({ Success: false, StatusCode: 206, Message: CODES[206] });
                    }
                } else {
                    return res.json({ Success: false, StatusCode: 210, Message: CODES[210] });
                }
            } else {
                return res.json({ Success: false, StatusCode: 210, Message: CODES[210] });
            }
        } catch (error) {
            return res.json({ Success: false, StatusCode: 501, Message: CODES[501] });
        }
    },
    delete: async(req, res) => {
        try {
            const id = {
                _id: req.body._id,
            };
            let user = await UserService.findUser(id);
            if (!user.name) {
                if (!isEmpty(user)) {
                    let result = await UserService.delete(id);
                    if (!isEmpty(result)) {
                        return res.json({ Success: true, StatusCode: 203, Message: CODES[203], data: result })
                    } else {
                        return res.json({ Success: true, StatusCode: 207, Message: CODES[207], data: result })
                    }
                } else {
                    return res.json({ Success: false, StatusCode: 210, Message: CODES[210] })
                }
            } else {
                return res.json({ Success: false, StatusCode: 210, Message: CODES[210] })
            }

        } catch (error) {
            return res.json({ Success: false, StatusCode: 501, Message: CODES[501] });
        }
    },
    list: async(req, res) => {
        try {
            let result = await UserService.list();
            if (!isEmpty(result)) {
                return res.json({ Success: true, StatusCode: 204, Message: CODES[204], data: result })
            } else {
                return res.json({ Success: true, StatusCode: 208, Message: CODES[208] })
            }
        } catch (error) {
            console.log(error)
            return res.json({ Success: false, StatusCode: 501, Message: CODES[501] });
        }
    },
    info: async(req, res) => {
        try {

            let result = await UserService.findUser(req.body);
            if (!isEmpty(result)) {
                return res.json({ Success: true, StatusCode: 204, Message: CODES[204], data: result })
            } else {
                return res.json({ Success: true, StatusCode: 208, Message: CODES[208] })
            }
        } catch (error) {
            return res.json({ Success: false, StatusCode: 501, Message: CODES[501] });
        }
    },
}