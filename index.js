var http = require('http');
const bodyParser = require('body-parser')
const path = require("path")
const express = require('express')
const {engine} = require('express-handlebars');
var cors = require('cors')
const app = express();
const fs = require('fs');
const util = require('util');
const cron = require('node-cron');
const { IndexRouter } = require('./src/routers');
const { CovertTextRouter } = require('./src_API/router/convertText');
const {deleteFile, handleDate} = require('./src/config/handleFile');
const { _initRouteAPI } = require('./src_API/router/init');

cron.schedule('0 0 */8 * * *', () => {
   deleteFile('./voices')
 });
 
app.use(cors())
app.use(bodyParser.json())
app.engine('hbs', engine({
   extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static('node_modules'))
app.use('/voices', express.static('voices'))

app.get("/", (req, res) => {
   res.render("home")
})
app.use('/', IndexRouter)
_initRouteAPI(app)
app.listen(3013, () => console.log("http://localhost:3013"))




