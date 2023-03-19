const { db } = require('../../common/connectDB');

const TextDetailModel = {
    list: async (input) => {
        try {
            let results = db('text_details').select('*').where('user_id', input.user_id);
            return results
        } catch {
            return null;
        }
    }
}

module.exports = {TextDetailModel}