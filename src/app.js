import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";   //it is used to access the cookes of browser from the server and set the cookes in the clients browsser 

// Create Express server
const app = express();

app.use(cors({
    origin:ProcessingInstruction.env.CORS_ORIGIN,
     credentials : true
}))
app.use(express.json({
    limit:"16kb"
}))                    // it means i am accepting data in json format and theat option is object under json define under express to set the limit of the data that we are accepting
app.use (express.urlencoded({extended:true,
    limit:"16kb"
}))  //it is used to accept the data in the form of urlencoded data  url, extended true means we can further extend the data

app.use(express.static("public"));  //it is used to serve the static files from the public folder this configuration is generally for the keeping the data locally at the server 

app.use(cookieParser())
export default app;