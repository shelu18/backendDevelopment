import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema(
    {
       videoFile:{
        type:String,
        required:true
       },
       thumbnail:{
        type:String,  //coludinary string 
        required:true
       },
       title:{
        type:String,
        required:true
       },
       description:{
        type:String,
        required:true
       },
       views:{
        type:Number,
        default:0
       },
isPublished:{
    type:Boolean,
    default:true
},
owner:{
    type:Schema.Types.ObjectId,  //userid add karo user schema se 
    ref:"User",

    }
}
,{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate); 

export const Video = mongoose.model("Video",videoSchema)//model bana ke export karo