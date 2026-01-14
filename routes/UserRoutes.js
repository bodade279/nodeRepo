const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/UserControllers');
const VerifyUser = require('../middleware/generateUserToken')


Router.post('/userRegister', UserController.userRegister);
Router.post('/userLogin', UserController.userLogin);
Router.get('/getUser', [VerifyUser.verifyUserToken], UserController.getUser);





module.exports = Router;

