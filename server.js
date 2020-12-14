const express = require('express');
const loginRoute = require('./routes/login');
const mongoose = require('mongoose');
const { urlencoded } = require('express');
const app = express();

mongoose.connect('mongodb://localhost/users',{ useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs');

app.use(urlencoded({extended: false}));
app.use('/login', loginRoute);


app.get('/', (req,res) =>{
    res.render('index');
});

app.listen(5000);