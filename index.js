var http = require('http');
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require("path")
const express = require('express')
const {engine} = require('express-handlebars');
var cors = require('cors')
const app = express();
const fs = require('fs');
const util = require('util');
const cron = require('node-cron');
const {deleteFile, handleDate} = require('./src/config/handleFile');
const { _initRouteAPI } = require('./src_API/router/init');
const { _initRoute } = require('./src/router/init');
const { CheckLoggedIn } = require('./helper/util');
const dotenv = require('dotenv').config();

const port = dotenv.parsed.APP_PORT;

cron.schedule('0 0 */1 * * *', () => {
   deleteFile('./voices')
 });
 
 app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
 }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.engine('hbs', engine({
   extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static('node_modules'))
app.use('/voices', express.static('voices'))



app.get("/", CheckLoggedIn, (req, res) => {
   console.log(CheckLoggedIn)
   return res.render("home")
})
// app.use('/', IndexRouter)
_initRoute(app)
_initRouteAPI(app)
app.listen(port, () => console.log("http://localhost:3013"))




