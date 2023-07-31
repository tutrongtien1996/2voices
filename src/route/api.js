const express = require('express');
const {AuthAPIController} = require('../controller/api/auth')
const { CheckIPAPIController } = require('../controller/api/checkip');
const { ConvertTextAPIController } = require('../controller/api/convertText.js');
const { ProductAPIController } = require('../controller/api/product.js');
const { VoicesAPIController } = require('../controller/api/voices.js');
const { AuthMiddle } = require('../helper/middleware.js');
const { GanerateController } = require('../controller/api/ganerate.js');
const { CheckLoggedIn } = require('../helper/util');

let isAuth = AuthMiddle.isAuth;
const AuthRouter = express.Router();
const CheckIPRouter = express.Router();
const CovertTextRouter = express.Router();
const GanerateRouter = express.Router();
const ProductRouter = express.Router();
const VoicesRouter = express.Router();

AuthRouter.post('/login', AuthAPIController.login)
AuthRouter.post('/refresh', AuthAPIController.refreshToken)

CheckIPRouter.get('/', CheckIPAPIController.check);

CovertTextRouter.post("/", isAuth, ConvertTextAPIController.convert)
CovertTextRouter.post("/conversation", CheckLoggedIn, ConvertTextAPIController.convertMultipleVoice)

GanerateRouter.post("/", isAuth, GanerateController.send_AI)

ProductRouter.get("/", isAuth, ProductAPIController.list)

VoicesRouter.get('/',  VoicesAPIController.list)





const _initRouteAPI = function (app) {
    app.use('/api/auth', AuthRouter)
    app.use('/api/checkip', CheckIPRouter)
    app.use('/api/convert', CovertTextRouter)
    app.use('/api/ganerate', GanerateRouter)
    app.use('/api/products', ProductRouter)
    app.use('/api/voices', VoicesRouter)
}
  
module.exports = {_initRouteAPI}