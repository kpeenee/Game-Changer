const express = require('express');
const User = require('./../models/user');
const router = express.Router();

router.get('/' , (req, res) =>{
    res.render('login');
})

router.post('/', (req,res) =>{
    console.log("Should Login");
    let use = User.findOne({username: req.body.username} , function(err,user){
        if(user == undefined){
            res.render('login');
            return;
        }
        if(user.password == req.body.password){
            res.render('UserHome', {loggedUser: user});
        }
        else{
            res.send("Incorrect password");
        }
    });
})

router.get('/signup' , (req,res) =>{
    res.render('signUp');
});

router.get('/:id' ,(req,res) => {
    res.send(req.params.id);
})

router.post('/signup' ,  (req,res) =>{
    let user = new User({
        username: req.body.username,
        password: req.body.password
    })
    User.find({username : user.username},async function(err,newUser){
        if(newUser.length > 0)
        {
            res.send("Username already exists");
        }else{
            try{
                user = await user.save();
                res.redirect(`/login/${user.id}`);
                }catch (e) {
                    res.render('signup');
                }
        }
    })
})

module.exports = router;