import ApiError from "../utils/customError.js";

export default (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Something went wrong"

    //mongoose
    // if(err.name === "ValidationError"){
    //     console.log(err.path)
    // }
    if(err.name === "CastError"){
        err = new ApiError(400,`This is invalid resource ${err.path}`)
    }
    if(err.code === 11000){
        const key = Object.keys(err.keyValue)[0];
        err = new ApiError(409,`${key} already exists`)
    }

    return res.status(err.statusCode).json({
        success:false,
        message:err.message

    })
}