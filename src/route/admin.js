const express = require('express');
const { AuthController } = require('../controller/admin/auth.js');
const { CheckLoggedIn } = require('../helper/util.js');
const { StudioController } = require('../controller/admin/studio.js');
const AuthRouter = express.Router();
const StudioRouter = express.Router();


AuthRouter.get('/login', AuthController.login)
AuthRouter.post('/login', AuthController.DoLogin)
AuthRouter.get('/logout',(req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});


StudioRouter.get('/', CheckLoggedIn, StudioController.index)


const _initRouteAdmin = function (app) {
    app.use('/auth', AuthRouter)
    app.use('/studio', StudioRouter)
}
  
module.exports = {_initRouteAdmin}