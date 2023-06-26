const { db } = require('../common/connectDB');

const ProctModel = {
    list: async (input) => {
        try {
            let results = db('text_details').select('*').where('user_id', input.id);
            return results
        } catch {
            return null;
        }
    }
}

module.exports = {ProctModel}