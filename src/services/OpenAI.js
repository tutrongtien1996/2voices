
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const OpenAI = {
    ask: async (prompt) => {
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 1000,
                stop: ["\n"],
            });
            return (response.data.choices[0].text);
        } catch (error) {
            return ""
        }
    }
}

module.exports = {OpenAI}