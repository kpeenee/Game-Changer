const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    users: {
        type: [String],
        required: true
    },
    tasks: {
        taskTitle: {type: [String]},
        taskDescription: {type: [String]}
    },
    mechanics: {
        mechanicTitle: {type: [String]},
        mechanicDescription: {type: [String]}
    }
});

module.exports = mongoose.model('Project',projectSchema);