const express = require('express');
const route = express.Router();
const db = require('../models/db');
route.use(express.json());
route.get('/home',(req,res)=>{
    try{
db.find().then((data)=>{
    res.send(data);
})
   }catch(err){
    res.status(500).send({message:"Intrnal Error Occusrd"+ err.message})
   } 
})
route.post('/home',async(req,res)=>{
    try{
        const user = new db(req.body);
        await user.save();
        res.status(200).send({message:"user Succesfully Created",user}); 
    }
    catch(err){
        res.status(500).send({message:"Internal Error Occured"+err.message});
    }
      })
    route.put('/home/:id',async(req,res)=>{
        const ids = req.params.id; 
        try{
       const user = await db.findOneAndUpdate({_id:ids},req.body,{
            new:true,
            runValidators:true,
        })
        if(!user){
            return res.status(404).send({
                message:"User not found"
            })
        }
                res.status(200).send({
            message:"User updated successfully",
            user:user
        })
        }
        catch(err){
            res.status(500).send({message:'Internal Error Occupied'+ err.message})
            
        }

        })
        route.delete("/home/:id",async(req,res)=>{
           
            try{
          const ids = req.params.id;
          const user = await db.findByIdAndDelete(ids);
          if(!user){
            return res.staytus(404).send({
                message:"User not found"
            })
         
            }
               res.status(200).send({
                message:"User Deleted Successfully"
               })

            }
            catch(err){
                res.status(500).send({
                    messsage:"Internal Error Occured"
                })
            }
        })
        module.exports = route;
  


