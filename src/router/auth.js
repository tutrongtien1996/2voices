const AuthRouter = require('express').Router();
const {AuthAPIController} = require('../controller/auth')

// AuthRouter.post('/register', AuthAPIController.register)
AuthRouter.post('/login', AuthAPIController.login)
AuthRouter.get('/login', AuthAPIController.form)
// AuthRouter.post('/refresh', AuthAPIController.refreshToken)

module.exports = {AuthRouter}