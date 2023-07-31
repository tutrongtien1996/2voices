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

/**
 * Sythesizes sample text into an .mp3 file.
 */
async function generateConversation(input) {
  var people = input.voices;
  var audioContentArray = []; // Array to store the audio content

  for (const sentence of input.conversation) {
    for (const person of people) {
      let personId = Object.keys(sentence)[0];
      if (person.id === personId) {
        let request = {
          input: { ssml: '<speak>'+sentence[personId]+'<break time="200ms"/></speak>' },
          voice: { languageCode: 'en-US', name: person['voice_id'] },
          audioConfig: { audioEncoding: 'MP3' },
        };

        let [response] = await client.synthesizeSpeech(request);
        audioContentArray.push(response.audioContent); // Add audio content to the array
      }
    }
  }

  const writeFile = util.promisify(fs.writeFile);
  let fileName = 'voices/' + uuidv4() + '.mp3';

  // Concatenate the audio content into a single Buffer
  let concatenatedAudio = Buffer.concat(audioContentArray);

  await writeFile(fileName, concatenatedAudio, 'binary');
  return fileName;
}

module.exports = {listVoices, generateFile, generateConversation}