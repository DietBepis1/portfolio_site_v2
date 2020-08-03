const mongoose = require('mongoose');
require('mongoose-type-url');

//set up for the document that will hold project items for display
const Schema = mongoose.Schema;

const projectItem = new Schema({
    title: {
        type: String,
        required: true
    },
    displayedDate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    projectURL: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    gitURL: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    picURL: {
        type: mongoose.SchemaTypes.Url,
        required: false
    }
    
})

module.exports = prjItem = mongoose.model('projectItem', projectItem);