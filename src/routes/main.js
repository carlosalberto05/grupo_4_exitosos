const express = require ('express');
const mainController = require('../controllers/mainController');
const mainRouter = express.Router();

mainRouter.get('/', mainController.index);

mainRouter.get('/login', mainController.login);
mainRouter.get('/register', mainController.register);
mainRouter.get('/cart', mainController.cart);
mainRouter.get('/productDetail', mainController.productDetail);


module.exports = mainRouter;