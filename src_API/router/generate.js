const express = require('express');
const {GanerateController} = require('../controller/ganerate');
const {AuthMiddle} = require('../../helper/middleware');
let isAuth = AuthMiddle.isAuth;

const GanerateRouter = express.Router();


GanerateRouter.post("/", isAuth, GanerateController.send_AI)
module.exports = {GanerateRouter}