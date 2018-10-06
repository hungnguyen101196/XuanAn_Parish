const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const constants = require('./constants');
const rp = require('request-promise')
module.exports = function configPassport(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({
        usernameField: "UserName",
        passwordField: "Password"
    }, async function(UserName, Password, done) {
        const options = {
            method: "POST",
            uri: constants.API_URL + "signin",
            headers: {
                "Authorization": constants.Authorization
            },
            body: {
                UserName: UserName,
                Password: Password
            },
            json: true
        };
        let result = await rp(options);
        console.log(result)
        if (!result) {
            return done(null, false, { Success: false, Message: "Username or Password incorrect!" });
        }

        return done(null, result)
    }))

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, false); // invalidates the existing login session.
    });

    function isAuthentication(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login')
        }
    }
}