const express = require('express');
const User = require('./../models/user');
const router = express.Router();

router.get('/view/:userId/:title', (req,res) => {
    console.log(req.params);
    User.findById(req.params.userId, function(err, user){
        let index = 0;
        let found = false;
        do{
            if(user.projects[index].title == req.params.title){
                found = true;
            } else{
                index++;
            }
        } while(found == false)
        res.render('ProjectView',{userId: req.params.usersId,
                                  project: user.projects[index]});
    });

});

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