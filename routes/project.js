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

        res.render('ProjectView',{userId: req.params.userId,
                                  project: user.projects[index],
                                  projectIndex: index});
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

router.post('/addTask', async (req,res) => {
    console.log(req.body);
    let userId = req.body.userId;
    let projectIndex = req.body.index;
    let newTask = req.body.newTask;
    let user = await User.findById(userId).exec();
    console.log(user.projects[projectIndex].tasks);
    user.projects[projectIndex].tasks.push(newTask);
    console.log(user.projects[projectIndex].tasks);
    User.findByIdAndUpdate(userId, {projects: user.projects}, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log("Works");
        }
    });
});




module.exports = router;