
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const {CheckIPModel} = require('../../model/checkIP')
const { v4: uuidv4 } = require('uuid');
const CheckIPAPIController = {
    check: async (req, res) => {
        let input = {
            name: req.ip,
            id : uuidv4()
        }
        let result = await CheckIPModel.one(input);
        if(result.length == 0){
            input.used_value = 1;
            await CheckIPModel.create(input);
            return ResponseSuccess(res, "", true)
        }
        if(result.length > 0){
            if(result[0].used_value == 5){
                return ResponseSuccess(res, "IP test > 5", false)
            }
            input.used_value = result[0].used_value + 1;
            await CheckIPModel.update(input);
            return ResponseSuccess(res, "", true)
        }
    },
    list: async (req, res) => {
        let results = await CheckIPModel.list();
        return ResponseSuccess(res, "", results)
    }
}

module.exports = {CheckIPAPIController}