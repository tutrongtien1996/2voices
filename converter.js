const textToSpeech = require('@google-cloud/text-to-speech');
const { v4: uuidv4 } = require('uuid')
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient({
    projectId: "webneeder",
    keyFile: "auth_key.json"
});

/**
 * Lists available voices for the specified language.
 *
 * @param {string} languageCode - The language code.
 */
async function listVoices(languageCode) {
  const [result] = await client.listVoices({languageCode});
  const voices = result.voices;

  voices.forEach((voice) => {
    console.log(`${voice.name} (${voice.ssmlGender}): ${voice.languageCodes}`);
  });
}

/**
 * Sythesizes sample text into an .mp3 file.
 */
async function generateFile(voiceId, text) {  
    const request = {
      input: {text: text},
      voice: {languageCode: 'vi-VN', "name": voiceId},
      audioConfig: {audioEncoding: 'MP3'},
    };
  
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    let fileName = "voices/"+uuidv4()+".mp3"
    await writeFile(fileName, response.audioContent, 'binary');
    return fileName
}

module.exports = {listVoices, generateFile}