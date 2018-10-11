const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/User');
module.exports = function configPassport(app) {
    try {
        app.use(passport.initialize());
        app.use(passport.session());
        passport.use(new LocalStrategy({
                usernameField: "UserName",
                passwordField: "Password"
            },
            function(UserName, Password, done) {
                return UserModel.findOne({ UserName: UserName }, function(err, user) {
                    if (err) { return done(err); }
                    if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    if (!user.comparePassword(Password)) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                    return done(null, user);
                });
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
            UserModel.findById(id, function(err, user) {
                done(err, user);
            });
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports.isAuthentication = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/')
    }
}