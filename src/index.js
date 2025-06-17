//require('dotenv').config({path: '.env'})

import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path:'.env'
})
connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("We are facing Error:", error);
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`App is listening at port :${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO DB CONNECTION FAILED", err);
})








/*import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app=express();
;(async()=>{
   try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
       console.log("Error: ", error);
     })
      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
   }
   catch(err)
   {
    console.log("Error :", err)
    throw err
   }
})()
   */