const { voices } = require("../../data/voices");

const StudioController = {
    index: function(request, response) {
      response.render('admin/pages/studio');
    },
    mulitpleVoice: function(request, response) {
      response.render('admin/pages/multipleVoice', {
        voices: voices
      });
    }
  }
  
  module.exports = {StudioController}