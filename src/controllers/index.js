const {indexModel} = require('../model/index')

const indexController = {
    convert: async (req, res) => {
        let input = {
            voiceId: req.body.voiceId,
            text: req.body.text
        }
        let fileName = await indexModel.convert(input)
        res.send({"file_name": fileName})
     }
}

module.exports = {indexController}