const express = require('express');
const AuthRouter = express.Router();


// UserControler
const UserControler = require('../controllers/UserController');
AuthRouter.route('/user/create').post(UserControler.create);
AuthRouter.route('/user/update').post(UserControler.update);
AuthRouter.route('/user/delete').post(UserControler.delete);
AuthRouter.route('/users/list').get(UserControler.list);

// ContactControler
const ContactControler = require('../controllers/ContactController');
AuthRouter.route('/contact/create').post(ContactControler.create);

// NewsControler
const NewsControler = require('../controllers/NewsController');
AuthRouter.route('/news/create').post(NewsControler.create);

// NotificatonController
const NotificatonController = require('../controllers/NotificationController');
AuthRouter.route('/notification/create').post(NotificatonController.create);

// ParishInformatonControler
const ParishInformatonControler = require('../controllers/ParishInfomationController');
AuthRouter.route('/parishinformation/create').post(ParishInformatonControler.create);

// ShareCornerControler
const ShareCornerControler = require('../controllers/ShareCornerController');
AuthRouter.route('/sharecorner/create').post(ShareCornerControler.create);

// CommentControler
const CommentControler = require('../controllers/CommentController');
AuthRouter.route('/comment/create').post(CommentControler.create);

module.exports = AuthRouter;