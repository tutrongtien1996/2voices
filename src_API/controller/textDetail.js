const {TextDetailModel} = require('../model/textDetail')
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const { v4: uuidv4 } = require('uuid');
const TextDetailController = {
    list: async (req, res) => {
        let results = await TextDetailModel.list(req.user);
        if(results === null){
            return ResponseFail(res, "request is errors")
        }
        return ResponseSuccess(res, "", results)
    }
}

module.exports = {TextDetailController}