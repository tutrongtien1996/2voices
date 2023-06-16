const {ProctModel} = require('../../model/product')
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const ProductAPIController = {
    list: async (req, res) => {
        let results = await ProctModel.list(req.user);
        if(results === null){
            return ResponseFail(res, "request is errors")
        }
        return ResponseSuccess(res, "", results)
    }
}

module.exports = {ProductAPIController}