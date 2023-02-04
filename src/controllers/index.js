const {indexModel} = require('../model/index')
const {responseResult} = require('../config/response')

const indexController = {
    convert: async (req, res) => {
        let voices = ['vi-VN-Standard-A', 'vi-VN-Standard-B', 'vi-VN-Standard-C', 'vi-VN-Standard-D']
        let input = {
            voiceId: req.body.voiceId,
            text: req.body.text
        }
        if(input.text.length > 1000){
            return res.send(responseResult.unsuccess("max length < 1001"))
        }
        if(input.text.length < 1){
            return res.send(responseResult.unsuccess("min length > 0"))
        }
        if(voices.includes(input.voiceId)){
            let fileName = await indexModel.convert(input)
            return res.send(responseResult.success({"file_name": fileName}))
        }
        return res.send({})
     }
}

module.exports = {indexController}