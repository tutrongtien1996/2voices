const express = require('express');
const {indexController} = require('../controllers/index')


const IndexRouter = express.Router();


IndexRouter.post("/convert", indexController.convert)
module.exports = {IndexRouter}