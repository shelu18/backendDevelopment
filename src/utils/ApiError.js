class ApiError extends Error {
  constructor(statusCode, 
    message= "An error occurred",
errors=[],
statck=""
  ){
    super(message);
    this.statusCode = statusCode;
    this.data=null
    this .message = message;
    this.success = false;

    this.errors = errors;
    this.stack = stack;
    if(statck){
        this.stack = statck;

    }else{
        Error.captureStackTrace(this, this.constructor);
    }
    }
}
export default ApiError;