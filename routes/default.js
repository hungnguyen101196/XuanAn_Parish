const express = require('express');
const defaultRouter = express.Router();

// LoginController
const LoginController = require('../controllers/LoginController');
defaultRouter.route('/').get(LoginController.index);
defaultRouter.route('/signin').post(LoginController.login);

module.exports = defaultRouter;