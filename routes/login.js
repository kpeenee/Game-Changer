const express = require('express');
const router = express.Router();

router.get('/' , (req, res) =>{
    res.render('login');
})

router.get('/signup'  , (req,res) =>{
    res.render('signUp');
});

router.post('/signup' , (req,res) =>{
    console.log("Yep");
    res.render('login');
})

module.exports = router;