const express = require('express');
const {ConvertTextController} = require('../controller/convertText');

const CovertTextRouter = express.Router();


CovertTextRouter.post("/", ConvertTextController.convert)
// IndexRouter.post("/generate", indexController.generate)

module.exports = {CovertTextRouter}