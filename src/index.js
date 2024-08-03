import 'dotenv/config'
import mongoose from 'mongoose';

import connectDB from './db/index.js';

connectDB()        
 .then (()=>{
   
    app.listen(process.env.PORT ||8000,()=>{    //here we used the listner to listen the port at the real time from the port if tha is not available it use the  default port number 8000 
        console.log(`server is running on port ${process.env.PORT ||8000}`);

    })
 })       //when database will connecr it will return the promise 
 .catch((err)  => {
    console.log("connection failed",err);
 })                
