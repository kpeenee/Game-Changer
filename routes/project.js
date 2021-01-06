const express = require('express');
const User = require('./../models/user');
const router = express.Router();


router.post('/create', (req,res) => {
    console.log("Recieved info");
    newTitle = req.body.title;
    newDescription = req.body.description;
    UserId = req.body.usersId;

    let newProject = {
        title: newTitle,
        description: newDescription
    };

    User.findByIdAndUpdate(req.body.usersId, 
       {$push: {projects: newProject}}, function(err, project){
           if(err){
               console.log(err);
           }
           else{
               console.log("Works");
           }
       });

});

 function getUsersProjects(ID){
    console.log(User.findById(ID, 'projects').exec());
 }

module.exports = router;