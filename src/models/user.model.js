import mongoose from "mongoose";
import jsonwebtoken, { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcryptjs";
const userSchema= new Schema(
    {   // this is a method in which we pass multiple objects
username :{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true      //it is used to create the index of the username in the database for searching the username in the database
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
},
fullName:{
    type:String,
    required:true,
    trim:true,
    index:true
},
avtar:{
    type:String,  //this string store the url from the cloudinary where the image is stored
    required:true
},
coverImage:{
    type:String,
    required:true
},
watchHistory:[{           //this is an array of object id of the video that user has watched
    type:Schema.Types.ObjectId,  //we need object id of video as a type of watch history
    ref:"Video"
}],
password:{
    type:string,  // generally we store the password in the form of hash so that it is not readable to anyone but we are using the string because agar sting use nahi karenge to compare kese karenge password ko 
     required:[true,"Password is required"], //squae braces because i am passing the message here 
},
refreshToken:{
    type:String,
    
}

}, {timeStamps:true})
userSchema.pre("save",async function(next){})   //here we are passing a async function which will run before the save method of the userSchema to mqnipulate the data in the userSchema
      if(!this.isModified("password")) return next() ;                                       //passing next in thr function because it is a middleware function and we have to pass next to tell the function to move to the next middleware function
  this.password=await bcrypt.hash(this.password,10)  //this.password is the password that is coming from the user and we are hashing it using bcrypt.hash method and 10 is the number of rounds of hashing         but according to this code it will save the password everytime it save the data for that we have to write logic to pass this and save the password only when anymodified in the password field....               
  next()                                          //this is used to move to the next middleware function
   userSchema.methods.isPasswordCorrect =async function (password){
return await bcrypt.compare(password,this.password)
   }   
   userSchema.methods.generateAccessToken =function(){
return jwt.sign(
    {
        id:this._id,
    email: this.email,
    username:this.username,
    fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:process.env.ACESS_TOKEN_EXPIRES_IN}
)
}
    
   userSchema.methods.generateRefreshToken =function(){
    return jwt.sign(
        {
            id:this._id,
       
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRES_IN}
    )
   }                                                         //this is a method of userSchema which is used to compare the password that is coming from the user and the password that is stored in the database
export const User =mongoose.model("User",userSchema)  //we are asking to mongoose to create a model of user using the userSchema and we are exporting it