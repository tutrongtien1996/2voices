require('dotenv').config()
const axios = require("axios")
const URL_AI = "https://api.openai.com/v1/completions"


const OpenAI = {
    ask: async (question) => {
        try {
            let response = await  axios.post(
                URL_AI, 
                {
                    model: "text-davinci-003",
                    prompt: question,
                    max_tokens: 1000,
                }, 
                {
                    headers: {
                        Authorization: "Bearer "+ process.env.OPENAI_API_KEY
                    }
                });
                return response.data.choices[0].text;
            } catch (er) {
                return "";
            }
    }
}

module.exports = {OpenAI}