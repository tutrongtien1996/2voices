const fs = require('fs')

const {ProctModel} = require('../../model/product')
const { ResponseSuccess, ResponseFail } = require('../../helper/response')
const ProductAPIController = {
    list: async (req, res) => {
        let results = await ProctModel.list(req.session.user);
        if(results === null){
            return ResponseFail(res, "request is errors")
        }
        return ResponseSuccess(res, "", results)
    },

    delete: async (req, res) => {
        let input = {
            id: req.body.id,
            url_audio: req.body.url_audio
        }
        let results = await ProctModel.delete(input);
        if(!results){
            return ResponseFail(res, "request is errors")
        }
        
        const pathFolder = './voices';
        fs.readdirSync(pathFolder).forEach(file => {
            if(('voices/' + file) == input.url_audio){
                fs.unlinkSync(pathFolder + '/' + file)
            }
        });
            return ResponseSuccess(res, "", results)
        }
        }

module.exports = {ProductAPIController}