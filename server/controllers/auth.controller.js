import User from "../models/user.model.js"
import { catchAsync } from "../utils/catchAsync.js"
import ApiError from "../utils/customError.js";
import { setToken } from "../utils/token.js";

export const register = catchAsync(async (req,res,next)=>{
    const {name,email,password}=req.body;
      const  user = new User({
        name,email,password,...req.body
      })
      await user.save();
      const userObj = user.toObject();
      delete userObj.password
      return res.status(201).json({message:"User created successfully.",data:userObj})
})

export const login = catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;
    const verifyEmail = await User.findOne({email}).select("+password");
    if(!verifyEmail || !(await verifyEmail.comparePassword(password))){
        return next(new ApiError(400,"Invalid email or password."))
    }
    setToken(200,verifyEmail,res);
})

export const logout = (req,res,next)=>{
    res.clearCookie("token")
    return res.status(200).json({message:"Logged out successfully."})
}

export const getMe = catchAsync(async(req,res,next)=>{
    return res.status(200).json(req.user)
})