const express = require('express');
const loginRoute = require('./routes/login').router;
const projectRoute = require('./routes/project').router;
const mongoose = require('mongoose');
const { urlencoded } = require('express');
const app = express();

mongoose.connect('mongodb://localhost/users',{useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs');

app.use(urlencoded({extended: false}));
app.use('/login', loginRoute);
app.use('/project', projectRoute);


app.get('/', (req,res) =>{
    res.render('index');
});

app.listen(5000);