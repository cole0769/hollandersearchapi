'use strict';

const express = require('express');
const eventControllerApp = require('../controllers/eventControllerApp');
const router = express.Router();

// const {getAccounts} = eventController;

// router.get('/accounts', eventController.getAccounts);
router.get('/manufacturers', eventControllerApp.getHollanderMfrList);
router.get('/models', eventControllerApp.getHollanderModelList);
router.get('/models/:id', eventControllerApp.getHollanderBrandModelList);
module.exports = {
    routes: router
}