const express = require('express');
const router = express.Router();


router.post('/create', (req,res) => {
    console.log("Recieved info");
    console.log(req.body.title);
    console.log(req.body.description);
});

module.exports = router;