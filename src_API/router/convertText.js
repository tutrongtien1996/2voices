const express = require('express');
const {ConvertTextController} = require('../controller/convertText');
const {AuthMiddle} = require('../../helper/middleware');
let isAuth = AuthMiddle.isAuth;

const CovertTextRouter = express.Router();


CovertTextRouter.post("/", isAuth, ConvertTextController.convert)

module.exports = {CovertTextRouter}