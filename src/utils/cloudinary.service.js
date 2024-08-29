import {v2 as cloudinary} from 'cloudinary'
import fs  from "fs"



import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_kEY, 
        api_secret:process.env.CLOUDINARY_API_kEY_SECRET
    });
    //we make a method which is taking a local path 
    const uploadOnCloudinary = async(localFilePath)=>{
        try{
            if(!localFilePath) return null
            //upload the file on cloudinary
         const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            //file has been uploaded successfully
            console.log("file is uploaded successfully",response.url)
            return response;
        }catch(error){

            fs.unlinkSync(localFilePath)//removed the locally saved temporary file as upload operation get failed 
            return null;
        }

    }
    export {uploadOnCloudinary}
    