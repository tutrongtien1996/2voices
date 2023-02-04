var http = require('http');
const bodyParser = require('body-parser')
const path = require("path")
const express = require('express')
const {engine} = require('express-handlebars');
const app = express();
const fs = require('fs');
const util = require('util');
const { IndexRouter } = require('./src/routers');

app.use(bodyParser.json())
app.engine('hbs', engine({
   extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static('node_modules'))
app.get("/", (req, res) => {
   res.render("home")
})
app.use('/', IndexRouter)
app.listen(3010, () => console.log("http://localhost:3010"))
