import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
const router = Router()
                                                          //it means when it is going to register router the registerUser method eill be executed and before the execution of the method we want the middleware in between of this that is upload middleware pasing two objects in the upload.fields methodin the form of array 
                                                            //this is how we inject the middleware in between the route and the controller
router.route("/register").post(
    upload.fields([
        {name:"avatar",maxCount:1},
        {name:"coverImage",maxCount:1}
    ]),
    registerUser)      
export default router 