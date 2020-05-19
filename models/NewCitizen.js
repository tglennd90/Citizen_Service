const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let date = Date();

// Schema
const newCitizen = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    location: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateAdded: {
        type: String,
        default: date.toString()
    }
});

// Model
const newCitizen = mongoose.model('Citizen', newCitizen);

module.exports = newCitizen;