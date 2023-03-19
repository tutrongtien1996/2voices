const { AuthRouter } = require('./auth')
const { CovertTextRouter } = require('./convertText')
const {TextDetailRouter} = require('./textDetail')
const {VoicesRouter} = require('./voices')

const _initRouteAPI = function(app){
    app.use('/api/convertText', CovertTextRouter)
    app.use('/api/textDetails', TextDetailRouter)
    app.use('/api/auth', AuthRouter)
    app.use('/api/voices', VoicesRouter)
}


module.exports = {_initRouteAPI}