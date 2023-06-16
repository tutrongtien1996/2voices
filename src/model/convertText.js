const { db } = require('../../common/connectDB');
const { generateFile } = require('../../converter');

const ConvertTextModel = {
    convert: async (input) => {
        try {
            let filename =  await generateFile(input.voiceId, input.content);
            input.filename = filename
            if(filename){
                let result = await db('text_details').insert({id: input.id, user_id: input.user_id, title: input.title, content: input.content, voice_id: input.voiceId, url_audio: input.filename, number_chars: input.number_chars, speed: input.speed, volumn: input.volumn});
                if(result){
                    let results = await db('text_details').select('created_at').where('id', input.id);
                    input.created_at = results[0].created_at
                    return input;
                }
                return null;
            }
        } catch {
            return null;
        }
    }
}

module.exports = {ConvertTextModel}