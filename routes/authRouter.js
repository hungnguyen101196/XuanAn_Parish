const express = require('express');
const authRouter = express.Router();


// UserControler
const UserController = require('../controllers/UserController');
authRouter.route('/users').get(UserController.index);
authRouter.route('/user/create').post(UserController.create);
authRouter.route('/user/update').post(UserController.update);
authRouter.route('/user/delete').post(UserController.delete);
authRouter.route('/users/list').get(UserController.list);

// ContactControler
const ContactController = require('../controllers/ContactController');
authRouter.route('/contact').get(ContactController.index);
authRouter.route('/contact/create').post(ContactController.create);

// NewsControler
const NewsController = require('../controllers/NewsController');
authRouter.route('/news').get(NewsController.index);
authRouter.route('/news/create').post(NewsController.create);

// NotificatonController
const NotificationController = require('../controllers/NotificationController');
authRouter.route('/notification').get(NotificationController.index);
authRouter.route('/notification/create').post(NotificationController.create);

// ParishInformatonControler
const ParishInformationController = require('../controllers/ParishInfomationController');
authRouter.route('/parish-information').get(ParishInformationController.index);
authRouter.route('/parishinformation/create').post(ParishInformationController.create);

// ShareCornerControler
const ShareCornerController = require('../controllers/ShareCornerController');
authRouter.route('/share-corner').get(ShareCornerController.index);
authRouter.route('/sharecorner/create').post(ShareCornerController.create);
authRouter.route('/sharecorner/list').post(ShareCornerController.list);

// CommentControler
const CommentController = require('../controllers/CommentController');
authRouter.route('/comment').get(CommentController.index);
authRouter.route('/comment/create').post(CommentController.create);

module.exports = authRouter;