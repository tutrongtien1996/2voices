const CheckIPRouter = require('express').Router();
const {CheckIPController} = require('../controller/checkip')

CheckIPRouter.get('/', CheckIPController.check);
// CheckIPRouter.get('/', CheckIPController.list);

module.exports = {CheckIPRouter}