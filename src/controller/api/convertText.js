const {ConvertTextModel} = require('../../model/convertText')
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const { v4: uuidv4 } = require('uuid');

// const { OpenAI } = require('../services/OpenAI')

const ConvertTextAPIController = {
    convert: async (req, res) => {
        let voices = ['vi-VN-Standard-A', 'vi-VN-Standard-B', 'vi-VN-Standard-C', 'vi-VN-Standard-D']
        let input = {
            id: uuidv4(),
            user_id: req.user.user_id,
            voiceId: req.body.voiceId,
            content: req.body.text,
            title: req.body.title,
            number_chars: req.body.text.length,
            volumn: req.body.volumn,
            speed: req.body.speed
        }
        if(input.content.length > 3000){
            return ResponseFail(res, "max length < 3000")
        }
        if(input.content.length < 1){
            return ResponseFail(res, "min length > 0")
        }
        if(voices.includes(input.voiceId)){
            if(input.title.length == 0){
                input.title = input.content.slice(0, 30);
            }
            let data = await ConvertTextModel.convert(input);
            if(data == null){
                return ResponseFail(res, "convert is unsuccess!")
            }
            return ResponseSuccess(res,"", data)
        }
        return ResponseFail(res, "request not accept")
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

module.exports = {ConvertTextAPIController}