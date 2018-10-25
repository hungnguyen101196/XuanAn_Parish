var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var hbs = require('express-handlebars');
var helpers = require('./helper/helper');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var validator = require('express-validator')
    // db
require('./configs/database');

var authRouter = require('./routes/authRouter');
var defaultRouter = require('./routes/default');
var app = express();

// view engine setup
app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    defaultLayout: __dirname + '/views/layout',
    helpers: helpers
})); // view engine setup
app.set('views', path.join(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');
app.use(session({
    secret: 'xuananapp',
    saveUninitialized: true,
    resave: true
}))
app.use(validator())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./configs/configsPassport')(app)
app.use('/', defaultRouter);
app.use('/admin', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;