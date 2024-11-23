import express from 'express';
import React from 'react';
import mongoose from 'mongoose';
import bcrygpt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();
const app = express();

const app = express();
app.use(express.json());
mongoose.connect(process.env.mongodb+srv://Amritsapkota:<rW_CJt3UpqL2AJB>@cluster0.ev3jp.mongodb.net/, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));
  const userSchema = new mongoose.Schema({
   email:{type:String,required:true,unique:true} ,
   password:{type:String,required:true,unique:true} ,
    });
    const User= mongoose.model(`User`,userSchema);
    // signup route
    app.post(`/signup`,async(req,res)=>{
        const {email,password}=req.body;
        const hashedpassword=await bcrypt.hash(password,12);
        try{
            const newUser= new User({
                email,
                password:hashedpassword
            });
            await newUser.save();   
            res.status(201).send({message:`User created successfully`});

        }
        catch(err){
            res.status(500).send({message:`Something went wrong`});
        }
    };
