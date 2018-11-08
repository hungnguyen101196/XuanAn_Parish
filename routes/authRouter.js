const express = require('express');
const authRouter = express.Router();
const auth = require('../configs/configsPassport');

authRouter.use(function(req, res, next) {
    var token = req.headers['x-access-token'];
    next();
});

// ContactControler
const HomeController = require('../controllers/HomeController');
authRouter.route('/').get(auth.isAuthentication, HomeController.index);

// UserControler
const UserController = require('../controllers/UserController');
authRouter.route('/users').get(auth.isAuthentication, UserController.index);
authRouter.route('/user/create').post(auth.isAuthentication, UserController.create);
authRouter.route('/users/list').get(auth.isAuthentication, UserController.list);
authRouter.route('/user/info').get(auth.isAuthentication, UserController.info);
authRouter.route('/user/update').post(auth.isAuthentication, UserController.update);
authRouter.route('/user/delete').post(auth.isAuthentication, UserController.delete);

// ContactControler
const ContactController = require('../controllers/ContactController');
authRouter.route('/contact').get(auth.isAuthentication, ContactController.index);
authRouter.route('/contact/create').post(auth.isAuthentication, ContactController.create);

// NewsControler
const NewsController = require('../controllers/NewsController');
authRouter.route('/news').get(auth.isAuthentication, NewsController.index);
authRouter.route('/news/create').post(auth.isAuthentication, NewsController.create);

// NotificatonController
const NotificationController = require('../controllers/NotificationController');
authRouter.route('/notification').get(auth.isAuthentication, NotificationController.index);
authRouter.route('/notification/create').post(auth.isAuthentication, NotificationController.create);

// ParishInformatonControler
const ParishInformationController = require('../controllers/ParishInfomationController');
authRouter.route('/parish-information').get(auth.isAuthentication, ParishInformationController.index);
authRouter.route('/parishinformation/create').post(auth.isAuthentication, ParishInformationController.create);

// ShareCornerControler
const ShareCornerController = require('../controllers/ShareCornerController');
authRouter.route('/share-corner').get(auth.isAuthentication, ShareCornerController.index);
authRouter.route('/sharecorner/create').post(auth.isAuthentication, ShareCornerController.create);
authRouter.route('/sharecorner/list').post(auth.isAuthentication, ShareCornerController.list);

// CommentControler
const CommentController = require('../controllers/CommentController');
authRouter.route('/comment').get(auth.isAuthentication, CommentController.index);
authRouter.route('/comment/create').post(auth.isAuthentication, CommentController.create);

const CategoryController = require('../controllers/CategoryController');
authRouter.route('/category/create').post(auth.isAuthentication, CategoryController.create);
authRouter.route('/category/getParent').get(auth.isAuthentication, CategoryController.getParent);
authRouter.route('/category/updateParent').post(auth.isAuthentication, CategoryController.updateParent);

module.exports = authRouter;