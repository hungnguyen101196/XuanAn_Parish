const express = require('express');
const defaultRouter = express.Router();


// UserControler
const UserControler = require('../controllers/UserController');
defaultRouter.route('/user/create').post(UserControler.create);

defaultRouter.route('/index').get((req, res) => {
    res.render('index', { title: 'hello' })
})



module.exports = defaultRouter;