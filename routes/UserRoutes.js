const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/UserControllers');
const VerifyUser = require('../middleware/generateUserToken')


Router.post('/userRegister', UserController.userRegister);
Router.post('/userLogin', UserController.userLogin);
Router.get('/getUser', [VerifyUser.verifyUserToken], UserController.getUser);

// Admin Routes
Router.post('/adminRegister', UserController.adminRegister);
Router.post('/adminLogin', UserController.adminLogin);

// Password Reset Routes (Used by both User and Admin)
Router.post('/forgotPassword', UserController.forgotPassword);
Router.post('/verifyOTP', UserController.verifyOTP);
Router.post('/resetPassword', UserController.resetPassword);





module.exports = Router;

