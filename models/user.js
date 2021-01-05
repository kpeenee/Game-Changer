const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    projects: [{
        title: {type: String},
        description: {type: String},
        tasks: {type: [String]},
        mechanics: {type: [String]}
    }]
});

module.exports = mongoose.model('User', userSchema);