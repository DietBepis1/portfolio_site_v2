const mongoose = require('mongoose');
require('mongoose-type-url');

//set up for the document that will hold an 'about me' section
const Schema = mongoose.Schema;

const aboutMe = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    tech: {
        type: Array,
        required: true
    },
    picture: {
        type: mongoose.SchemaTypes.Url,
        required: true
    }
})

module.exports = About = mongoose.model('aboutMe', aboutMe);