const StudioController = {
    index: function(request, response) {
      response.render('admin/pages/studio', {data: request.session.user});
    }
  }
  
  module.exports = {StudioController}