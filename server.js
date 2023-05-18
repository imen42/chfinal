const express = require('express');
const connect = require("./config/connectDB");
// const connectDB = require('./config/connectDB');
require("dotenv").config({ path: "./config/.env"});
connect(); 

var app = express();
app.post('/add',async(req,res)=>{
    const {fullName,email,phone}=req.body
    try {
        const newUser = new User({
            fullName,
            email,
            phone
        })
        await newUser.save();
        res.send(newUser);
    }
    catch(error){
        console.log(error.message)
    }})
    app.get("/get",async(req,res)=>{
        const users = await User.find();
        res.send(users);
    })

    app.get("/get/:id",async(req,res)=>{
        const users = await User.findById(req.params.id);
        res.send(users);
    })
    app.put("/update/:id",async(req,res)=>{
        try{
            const editUser = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
            res.send(editUser);
    
        } catch (error) {
            console.log(error);
        }})
        app.delete("/delete/:id", async (req, res) => {
            try {
              const deletedUser = await User.findByIdAndDelete(req.params.id);
              res.send("user is deleted");
            } catch (error) {
              console.log(error.message);
          
            }});
app.listen(8000, (err) => 
err ? console.log(err) : console.log("Server is running on port 8000")
);