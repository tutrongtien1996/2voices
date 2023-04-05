const { AuthRouter } = require('./auth')

const _initRoute = function(app){
    app.use('/auth', AuthRouter)
}


module.exports = {_initRoute}