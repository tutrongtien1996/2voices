const fs = require('fs');
const path = require('path');

function deleteFile(pathFolder) {
    fs.readdirSync(pathFolder).forEach(file => {
        const { birthtime } = fs.statSync(path.join(pathFolder, file));

        let dif = new Date().getTime() - (new Date(birthtime).getTime() + 28800000);
        if (dif > 0) {
            fs.unlinkSync(path.join(pathFolder, file));
        }
    });
}

module.exports = { deleteFile };
