const asyncHandler =(requestHandler) => {
 return   (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).    //promise is two types resolve and reject or catch promise is used to handle the async code
        catch((err) => next(err))
    }                                                              //passede the request handler to the promise and if the promise is resolved then it will call the next function and if the promise is rejected then it will call the next function with the error
}



export {asyncHandler}


//this is how we manage this using try and catch block
// const asyncHandler = (requestHandler) => {
//     try{

//     }
//     catch(err){
//         res.status(error.code || 500).json({message:error.message || "An unknown error occurred"})

//     }