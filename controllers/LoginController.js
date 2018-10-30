const UserService = require('../services/UserService');
const Codes = require('../configs/response');
const contants = require('../configs/constants');
const { CODES } = require('../configs/response');
const { UserValidator, LoginValidator } = require('../validations/UserValidator');
const isEmpty = require('is-empty');
const jwt = require('jsonwebtoken');
const passport = require('passport');


module.exports = {
    index: async(req, res) => {
        res.render('login/index', { layout: 'login', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    login: (req, res, next) => {
        try {
            req.checkBody(LoginValidator);
            var errors = req.validationErrors();
            if (errors) {
                return res.json({ success: false, message: CODES[501], errors: errors });
            }
            passport.authenticate('local', { failureRedirect: '/' }, function(err, user) {
                if (err || !user) {
                    return res.json({ success: false, message: CODES[206], StatusCode: 206 })
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return res.json({ success: false, message: CODES[206], StatusCode: 206, })
                    }

                    const token = jwt.sign({ data: user }, contants.secret, { expiresIn: '1h' })
                    return res.status(200).json({ success: true, message: CODES[205], data: user, token: token })
                })
            })(req, res, next)
        } catch (error) {
            return res.json({ success: false, message: CODES[501], error: error })
        }

    },
    logout: async(req, res) => {
        try {
            req.logout();
            res.redirect('/');
        } catch (error) {
            return res.json({ Success: false, Status: 501, Message: Codes[501] })
        }
    }

}