const { generateFile } = require('../../converter');

const ConvertTextModel = {
    convert: async (input) => {
        return await generateFile(input.voiceId, input.text)
    }
}

module.exports = {ConvertTextModel}