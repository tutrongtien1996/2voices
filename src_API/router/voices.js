const VoicesRouter = require('express').Router();
const {VoicesController} = require('../controller/voices')

VoicesRouter.get('/',  VoicesController.list)

module.exports = {VoicesRouter}