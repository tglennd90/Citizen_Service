const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const colors = require('colors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

//Routes
const citizens = require('./routes/citizens');
app.use('/citizens',citizens);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/citizen_service', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose: Connected'.green)
});

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, console.log(`Server: http://localhost:${PORT}`.cyan));