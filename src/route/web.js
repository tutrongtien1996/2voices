const express = require('express');
const { homeController } = require('../controller/web/home.js');
const homeRouter = express.Router();
homeRouter.get('/', homeController.index)

const _initRouteWeb = function (app) {
    app.use('/', homeRouter)
}
  
module.exports = {_initRouteWeb}