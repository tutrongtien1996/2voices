const {ConvertTextModel} = require('../model/convertText')
const {responseResult} = require('../../src/config/response')
// const { OpenAI } = require('../services/OpenAI')

const ConvertTextController = {
    convert: async (req, res) => {
        let voices = ['vi-VN-Standard-A', 'vi-VN-Standard-B', 'vi-VN-Standard-C', 'vi-VN-Standard-D']
        let input = {
            voiceId: req.body.voiceId,
            text: req.body.text
        }
        if(input.text.length > 10000){
            return res.send(responseResult.unsuccess("max length < 1001"))
        }
        if(input.text.length < 1){
            return res.send(responseResult.unsuccess("min length > 0"))
        }
        if(voices.includes(input.voiceId)){
            let fileName = await ConvertTextModel.convert(input)
            return res.send(responseResult.success({"file_name": fileName}))
        }
        return res.send(responseResult.unsuccess("request not accept"))
    },

    // generate: async (req, res) => {
    //     let question = req.body.prompt
    //     if(question == false){
    //         return res.send(responseResult.unsuccess("failed"))
    //     } 
    //     let answer = await OpenAI.ask(question)
    //     return res.send(responseResult.success({"answer": answer}))
    // }
}

module.exports = {ConvertTextController}