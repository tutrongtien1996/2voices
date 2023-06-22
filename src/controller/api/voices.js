const {VoicesModel} = require('../../model/voices')
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const { voices } = require('../../data/voices')
const VoicesAPIController = {
    list: async (req, res) => {
        return voices ?  ResponseSuccess(res, "", voices) : ResponseFail(res, "request is errors")
        // let results = await VoicesModel.list();
        // if(results === null){
        //     return ResponseFail(res, "request is errors")
        // }
        // return ResponseSuccess(res, "", results)
    }
}

module.exports = {VoicesAPIController}