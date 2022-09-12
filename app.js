var express = require('express');
var app = express();
var path = require('path');
var expressLayout = require('express-ejs-layouts');

require('dotenv').config();

var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');



//mongodb connections

/* var mongoose = require('mongoose');
var registerModel = require('./models/register'); */

/* mongoose.connect(process.env.DBPASS) */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layout/mainlayout');
app.set('layout register', false);




app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayout)


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/', indexRouter);
app.use('/contact', contactRouter);


app.listen(process.env.PORT || 5000);

module.exports = app;