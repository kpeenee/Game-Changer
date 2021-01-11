const assert = require('chai').assert;
const createUser = require('../routes/login').CreateUser;
const createProject = require('../routes/project').createProject;

describe('Creating User', function(){
    let dave = createUser('Dave','David');
    it('Should return username Dave', function(){
        assert.equal(dave.username, 'Dave');
    });
    it('Should return password David', function(){
        assert.equal(dave.password, 'David');
    })
});

describe('Creating new project', function(){
    let project = createProject('Jump', 'Jump in time with the beat');
    it('Should have title jump', function(){
        assert.equal(project.title, 'Jump');
    });
    it('Should have description Jump in time with the beat', function(){
        assert.equal(project.description, 'Jump in time with the beat');
    })
});