const express = require('express');
const AuthRouter = express.Router();


// UserControler
const UserControler = require('../controllers/UserController');
AuthRouter.post('/user/create', UserControler.create);
AuthRouter.post('/user/update', UserControler.update);
AuthRouter.post('/user/delete', UserControler.delete);
AuthRouter.get('/users/list', UserControler.list);

// ContactControler
const ContactControler = require('../controllers/ContactController');
AuthRouter.post('/contact/create', ContactControler.create);

// NewsControler
const NewsControler = require('../controllers/NewsController');
AuthRouter.post('/news/create', NewsControler.create);

// NotificatonController
const NotificatonController = require('../controllers/NotificationController');
AuthRouter.post('/notification/create', NotificatonController.create);

// ParishInformatonControler
const ParishInformatonControler = require('../controllers/ParishInfomationController');
AuthRouter.post('/parishinformation/create', ParishInformatonControler.create);

// ShareCornerControler
const ShareCornerControler = require('../controllers/ShareCornerController');
AuthRouter.post('/sharecorner/create', ShareCornerControler.create);

// CommentControler
const CommentControler = require('../controllers/CommentController');
AuthRouter.post('/comment/create', CommentControler.create);

module.exports = AuthRouter;