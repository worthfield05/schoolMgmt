import jwt from 'jsonwebtoken';
import { catchAsync } from "../utils/catchAsync.js";
import ApiError from "../utils/customError.js";
import User from '../models/user.model.js'

export const isAuthenticated = catchAsync(async(req,res,next)=>{
  let token;
  if(req.cookies?.token){
    token = req.cookies.token;
  }
  else if(req.headers.authorization?.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1];
  }
  if(!token){
    return next(new ApiError(401,"You are not logged in. Please login to access this resource."))
  }
  let decoded;
  try {
    decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
  } catch (error) {
    if(error.name === "JsonWebTokenError"){
        return next(new ApiError(401,"Invalid token. Please login again."))
    }
    if(error.name === "TokenExpiredError"){
        return next(new ApiError(401,"Your token has expired. Please login again."))
    }
    return next(new ApiError(401,"Authentication failed."))
  }
  const currentUser = await User.findById(decoded.id);
  if(!currentUser){
    return next(new ApiError(401,"The user beloging to this token no longer exists."))
  }
  req.user = currentUser;
  next();


})
export const isAuthorized = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ApiError(403,"Access Denied: You do not have permission to perform this action."))
        }
        next();
    }
}