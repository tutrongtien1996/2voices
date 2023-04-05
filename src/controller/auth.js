

const {jwtHandle} = require('../../helper/handlePackage')
const randtoken = require('rand-token')
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv').config();

const bcrypt = require('bcrypt');
const { AuthModel } = require('../../src_API/model/Auth');
const saltRounds = 10;

const AuthAPIController = {
    form: (req, res) => {
        return res.render('auth')
    },
    login: async (req, res) => {
        // const username = req.body.username.toLowerCase()
        const password = req.body.password;

        console.log(req.body)
    
        // const users = await AuthModel.getUser(username);
        // if (users.length == 0) {
        //     return res.render('auth')
        // }
    
        // const isPasswordValid = bcrypt.compareSync(password, users[0].password);
        // if (!isPasswordValid) {
        //     return res.render('auth')
        // }
    
        // const accessTokenLife = dotenv.parsed.ACCESS_TOKEN_LIFE;
        // const accessTokenSecret = dotenv.parsed.ACCESS_TOKEN_SECRET;
    
        // const dataForAccessToken = {
        //     username: users[0].name,
        // };
        // const accessToken = await jwtHandle.generateToken(
        //     dataForAccessToken,
        //     accessTokenSecret,
        //     accessTokenLife,
        // );
        // if (!accessToken) {
        //     return res.render('auth')
        // }
        // let user = users[0]
        // let refreshToken = randtoken.generate(50); // tạo 1 refresh token ngẫu nhiên
        // if (!user.refreshToken) {
        //     user.refreshToken  = refreshToken;
        //     await AuthModel.updateToken(user);

        // } else {
        //     // Nếu user này đã có refresh token thì lấy refresh token đó từ database
        //     refreshToken = user.refreshToken;
        // }
    
        // return  res.redirect('/', {
        //     accessToken,
        //     refreshToken,
        //     user
        // })
    }
}


module.exports = {AuthAPIController}