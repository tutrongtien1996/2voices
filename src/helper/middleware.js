const { ResponseFail} = require('../helper/response');
const { AuthModel } = require('../model/Auth');
const { jwtHandle } = require('./handlePackage');


const AuthMiddle = {
    isAuth: async (req, res, next) => {
    // Lấy access token từ header
        // const accessTokenFromHeader = req.headers.authorization;
        const accessToken = req.session.accessToken;
        if (!accessToken) {
            return ResponseFail(res, "token not exits")
        }
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

        const verified = await jwtHandle.verifyToken(
            accessToken,
            accessTokenSecret,
        );
        if (!verified) return ResponseFail(res, "you can not connect link!")

        const users = await AuthModel.getUser(verified.payload.username);
        req.user = users[0];
        return next();
    }
}

module.exports = {AuthMiddle}