const { AuthRouter } = require('./auth')
const { CovertTextRouter } = require('./convertText')
const { GanerateRouter } = require('./generate')
const {TextDetailRouter} = require('./textDetail')
const {VoicesRouter} = require('./voices')

const _initRouteAPI = function(app){
    app.use('/api/convertText', CovertTextRouter)
    app.use('/api/textDetails', TextDetailRouter)
    app.use('/api/auth', AuthRouter)
    app.use('/api/voices', VoicesRouter)
    app.use('/api/ganerate', GanerateRouter)
}


module.exports = {_initRouteAPI}