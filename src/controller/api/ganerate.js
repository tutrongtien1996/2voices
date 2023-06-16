
const { ResponseSuccess, ResponseFail } = require('../../helper/response')

const { OpenAI } = require('../../services/OpenAI')

const GanerateController = {
    send_AI: async (req, res) => {
        let question = req.body.prompt
        if(question == false){
            return ResponseFail(res, "request Fail!")
        } 
        let answer = await OpenAI.ask(question)
        return ResponseSuccess(res, "", answer)
    }
}

module.exports = {GanerateController}