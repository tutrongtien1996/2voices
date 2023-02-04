const { generateFile } = require('../../converter');

const indexModel = {
    convert: async (input) => {
        return await generateFile(input.voiceId, input.text)
    }
}

module.exports = {indexModel}