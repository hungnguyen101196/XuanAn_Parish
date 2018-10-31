const UserService = require('../services/UserService');
const Codes = require('../configs/response');
const contants = require('../configs/constants');
const { CODES } = require('../configs/response');
const { LoginValidator } = require('../validations/UserValidator');
const isEmpty = require('is-empty');
const jwt = require('jsonwebtoken');
const passport = require('passport');


module.exports = {
    index: async(req, res) => {
        res.render('login/index', {
            layout: 'login',
            title: "Cổng thông tin điện tử Giáo xứ Xuân An",
            logo: "/images/logos/Duomo-of-Milan-696x366.ico",

        })
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
                    const token = jwt.sign({
                        data: {
                            Info: user.Info,
                            UserName: user.UserName,
                            _id: user._id
                        }
                    }, contants.secret, { expiresIn: 1440 });
                    console.log(token)
                    return res.status(200).send({
                        success: true,
                        message: CODES[205],
                        data: {
                            Info: user.Info,
                            Status: user.Status,
                            UserName: user.UserName,
                            CreatedDate: user.CreatedDate,
                            roles: user.roles,
                            _id: user._id
                        },
                        token: token
                    })
                })
            })(req, res, next)
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: CODES[501], error: error })
        }
    },
    logout: async(req, res) => {
        try {
            req.logout();
            res.redirect('/');
        } catch (error) {
            return res.json({
                Success: false,
                Status: 501,
                Message: Codes[501]
            })
        }
    }

}