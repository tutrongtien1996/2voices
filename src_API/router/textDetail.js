const express = require('express');
const {TextDetailController} = require('../controller/textDetail');
const {AuthMiddle} = require('../../helper/middleware');
let isAuth = AuthMiddle.isAuth;

const TextDetailRouter = express.Router();


TextDetailRouter.get("/", isAuth, TextDetailController.list)
// IndexRouter.post("/generate", indexController.generate)

module.exports = {TextDetailRouter}