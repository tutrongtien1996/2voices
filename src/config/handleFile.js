const fs = require('fs')

function deleteFile(pathFolder){
    fs.readdirSync(pathFolder).forEach(file => {
        const { birthtime } = fs.statSync(pathFolder + file)
        let dif = new Date().getTime() - (new Date(birthtime).getTime() + 28800000)
        if(dif > 0){
           fs.unlinkSync(pathFolder + '/' + file)
        }
    });
}

module.exports = {deleteFile}