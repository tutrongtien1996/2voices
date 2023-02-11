const express = require('express');
const {indexController} = require('../controllers/index');
const { OpenAI } = require('../services/OpenAI');

const IndexRouter = express.Router();


IndexRouter.post("/convert", indexController.convert)
IndexRouter.post("/generate", indexController.generate)

module.exports = {IndexRouter}