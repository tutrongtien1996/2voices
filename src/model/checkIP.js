const { db } = require('../../common/connectDB');

const CheckIPModel = {
    one: async (input) => {
        try {
            let results = db('ip_tests').select('*').where('name', input.name);
            return results
        } catch {
            return null;
        }
    },
    update: async (input) => {
        try {
            let results = db('ip_tests').update(input).where('name', input.name);
            return results
        } catch {
            return null;
        }
    },
    create: async (input) => {
        try {
            let results = db('ip_tests').insert(input);
            return results
        } catch {
            return null;
        }
    },
    list: async () => {
        try {
            let results = db('ip_tests').select('*');
            return results
        } catch {
            return null;
        }
    }
}

module.exports = {CheckIPModel}