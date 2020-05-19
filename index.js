const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Routes
const citizens = require('./routes/citizens');
app.use('/citizens',citizens);

mongoose.connect('mongodb://localhost:27017/citizenservice', {
    useNewUrlParser: true,
    useFindAndModify: false
},(error)=>{
    if(error){
        console.log("Unable to connect to database.");
        process.exit(1);
    } else {
        console.log("Database connection successful!");
    }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log("App is running!")
})