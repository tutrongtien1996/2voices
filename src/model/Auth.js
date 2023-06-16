const { db } = require("../common/connectDB");
const AuthModel = {
    getUser: async username => {
        try {
            const data = await db('userAuths').select('*').where('name', username);
            return data;
        } catch {
            return null;
        }
    },
    createUser: async user => {
        try {
            await db('userAuths').insert(user);
            await db('users').insert({id: user.user_id, name: user.name});
            return true;
        } catch {
            return false;
        }
    },
    updateToken: async function(input){
        try{
            let results = await db('userAuths').where('user_id', input.user_id).update('refreshToken', input.refreshToken)
            return results;
        }
        catch {
            return null
        }
    }
}


module.exports = {AuthModel}


