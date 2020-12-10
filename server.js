const express = require('express');
const loginRoute = require('./routes/login');
const app = express();

app.set('view engine', 'ejs');

app.use('/login', loginRoute);

app.get('/', (req,res) =>{
    res.render('index');
});

app.listen(5000);