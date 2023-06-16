const { db } = require('../../common/connectDB');

const VoicesModel = {
    list: async () => {
        try {
            let results = db('voices').select('*');
            return results
        } catch {
            return null;
        }
    }
}

module.exports = {VoicesModel}