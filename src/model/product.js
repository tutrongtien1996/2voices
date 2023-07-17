const { db } = require('../common/connectDB');

const ProctModel = {
    list: async (input) => {
        try {
            let results = db('text_details').select('*').where('user_id', input.id).orderBy('created_at', 'desc');
            return results
        } catch {
            return null;
        }
    },

    delete : async (input) => {
        try{
            let results = await db('text_details').del().where('id', input.id);
            return true;
        }
        catch {
            return false
        }
    }
}

module.exports = {ProctModel}