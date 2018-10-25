const UserService = require('../services/UserService');
const Codes = require('../configs/response');
const contants = require('../configs/constants');
const {
    CODES
} = require('../configs/response');
const isEmpty = require('is-empty');
const jwt = require('jsonwebtoken');
const passport = require('passport');


module.exports = {
    index: async (req, res) => {
        res.render('login/index', {
            layout: 'login',
            title: "Cổng thông tin điện tử Giáo xứ Xuân An",
            logo: "/images/logos/Duomo-of-Milan-696x366.ico",
            
        })
    },
    login: (req, res, next) => {
        passport.authenticate('local', {
            failureRedirect: '/'
        }, function (err, user) {
            if (err || !user) {
                return res.json({
                    success: false,
                    message: CODES[206],
                    StatusCode: 206,
                    error: err
                })
            }
            req.logIn(user, (err) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: CODES[206],
                        StatusCode: 206,
                    })
                }
                const token = jwt.sign({
                    data: user
                }, contants.secret, {
                    expiresIn: '1h'
                })
                return res.status(200).json({
                    success: true,
                    message: CODES[205],
                    data: user,
                    token: token
                })
            })
        })(req, res, next)
    },
    logout: async (req, res) => {
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