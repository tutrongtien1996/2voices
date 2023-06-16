
const homeController = {
    index: (req, res) => {
        return res.render('web/home', {layout: false})
    }
}
module.exports = {homeController}