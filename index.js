var http = require('http');
const bodyParser = require('body-parser')
const path = require("path")
const express = require('express')
const {engine} = require('express-handlebars');
const app = express();
const fs = require('fs');
const util = require('util');
const cron = require('node-cron');
const { IndexRouter } = require('./src/routers');

cron.schedule('* * 23 * * *', () => {
   console.log('running a task every minute');
 });
 

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
app.listen(3010, () => console.log("http://localhost:3010"))
