const express = require('express');
const citizensRouter = express.Router();
const Citizen = require('../models/NewCitizen');

//Read
citizensRouter.get('/citizens', (req,res)=>{
    Citizen.find({ }, (error,response)=>{
        if(error){
            res.status(500).json({message:{
                msgBody : "Unable to get Citizens",
                msgError : true
            }});
        } else {
            res.status(200).json(response);
        }
    });
});

//Create
citizensRouter.post('/citizens', (req,res)=>{
    const citizen = new Citizen(req.body);

    citizen.save((error,document)=>{
        if(error){
            res.status(500).json({message:{
                msgBody : "Unable to save new Citizen",
                msgError : true
            }});
        } else {
            res.status(200).json({message:{
                msgBody : "Saved new Citizen!",
                msgError : false
            }});
        }
    })
});

//Delete
citizensRouter.delete('/:id', (req,res)=>{
    Citizen.findByIdAndDelete(req.params.id,error=>{
        if(error) {
            res.status(500).json({message:{
                msgBody : "Unable to delete Citizen",
                msgError : true
            }});
        } else {
            res.status(200).json({message:{
                msgBody : "Deleted Citizen!",
                msgError : false
            }});
        }
    });
});

//Update
citizensRouter.put(':id',(req,res)=>{
    Citizen.findOneAndUpdate(req.params.id,req.body,{runValidators: true},(error,response)=>{
        if(error) {
            res.status(500).json({message:{
                msgBody : "Unable to update Citizen",
                msgError : true
            }});
        } else {
            res.status(200).json({message:{
                msgBody : "Updated Citizen!",
                msgError : false
            }});
        }
    });
});

module.exports = citizensRouter;
