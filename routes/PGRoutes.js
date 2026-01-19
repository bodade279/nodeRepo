const express = require('express');
const Router = express.Router();
const PGController = require('../controllers/PGControllers');
const { verifyAdminToken } = require('../middleware/generateAdminToken');
const { verifyUserToken } = require('../middleware/generateUserToken');

// Admin only route to create PG
Router.post('/createPG', verifyAdminToken, PGController.createPG);

// User/Admin route to get all PGs
Router.get('/getAllPGs', verifyUserToken, PGController.getAllPGs);

// Get single PG details
Router.get('/getPG/:id', verifyUserToken, PGController.getPGById);

module.exports = Router;
