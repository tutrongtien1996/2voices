
function CheckLoggedIn(req, res, next) {
  if (!req.session.user) {
    res.redirect("/auth/login");
    return;
  } else {
    return next()
  }
}

function getTokenSession(request){
  return {headers: { authorization: request.session.user.accessToken}}
}

module.exports = {CheckLoggedIn, getTokenSession}