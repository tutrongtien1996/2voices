
const { AuthAPIController } = require("../api/auth");



const AuthController = {
  login: function(request, response) {
    return response.render('admin/pages/auth');
  },
  DoLogin: async function(request, response) {
    const result = await AuthAPIController.login(request, response);
    if (result.value) {
      request.session.user = {
        id: result.user.user_id,
        name: result.user.name,
        accessToken: result.accessToken
      };
      return response.redirect('/studio');
    } else {
      return response.redirect('/auth/login');
    }
    
  }
}

module.exports = {AuthController}