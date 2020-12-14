const express = require('express');
const User = require('./../models/user');
const router = express.Router();

router.get('/' , (req, res) =>{
    res.render('login');
})

router.get('/signup'  , (req,res) =>{
    res.render('signUp');
});

router.get('/:id' ,(req,res) => {
    res.send(req.params.id);
})

router.post('/signup' , async (req,res) =>{
    let user = new User({
        username: req.body.username,
        password: req.body.password
    })
    try{
    user = await user.save();
    res.redirect(`/login/${user.id}`);
    }catch (e) {
        res.render('signup');
    }
})

module.exports = router;