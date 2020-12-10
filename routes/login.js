const express = require('express');
const router = express.Router();

router.get('/' , (req, res) =>{
    res.send('In Login');
})

router.get('/signup'  , (req,res) =>{
    res.send('In signup');
});

module.exports = router;