const {VoicesModel} = require('../model/voices')
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const VoicesController = {
    list: async (req, res) => {
        let results = await VoicesModel.list();
        if(results === null){
            return ResponseFail(res, "request is errors")
        }
        return ResponseSuccess(res, "", results)
    }
}

module.exports = {VoicesController}