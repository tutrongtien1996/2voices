const express = require('express');
const { AuthController } = require('../controller/admin/auth.js');
const { CheckLoggedIn } = require('../helper/util.js');
const { StudioController } = require('../controller/admin/studio.js');
const { CheckIPAPIController } = require('../controller/api/checkip');
const { ConvertTextAPIController } = require('../controller/api/convertText.js');
const { ProductAPIController } = require('../controller/api/product.js');
const { VoicesAPIController } = require('../controller/api/voices.js');
const { GanerateController } = require('../controller/api/ganerate.js');


const AuthRouter = express.Router();
const StudioRouter = express.Router();
const CheckIPRouter = express.Router();
const CovertTextRouter = express.Router();
const GanerateRouter = express.Router();
const ProductRouter = express.Router();
const VoicesRouter = express.Router();



AuthRouter.get('/login', AuthController.login)
AuthRouter.post('/login', AuthController.DoLogin)
AuthRouter.get('/logout',(req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});


StudioRouter.get('/', CheckLoggedIn, StudioController.index)
StudioRouter.get('/multiple-voice', CheckLoggedIn, StudioController.mulitpleVoice)

CheckIPRouter.get('/', CheckIPAPIController.check);

CovertTextRouter.post("/", CheckLoggedIn, ConvertTextAPIController.convert)

GanerateRouter.post("/", CheckLoggedIn, GanerateController.send_AI)

ProductRouter.get("/", CheckLoggedIn, ProductAPIController.list)
ProductRouter.delete("/", CheckLoggedIn, ProductAPIController.delete)

VoicesRouter.get('/',  VoicesAPIController.list)


const _initRouteAdmin = function (app) {
    app.use('/auth', AuthRouter)
    app.use('/studio',  StudioRouter)
    app.use('/checkip', CheckIPRouter)
    app.use('/convert', CovertTextRouter)
    app.use('/ganerate', GanerateRouter)
    app.use('/products', ProductRouter)
    app.use('/voices', VoicesRouter)
}
  
module.exports = {_initRouteAdmin}