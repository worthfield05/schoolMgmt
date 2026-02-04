import Class from "../models/class.model.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createClass = catchAsync(async(req,res,next)=>{
    const newClass = await Class.create(req.body);
    return res.status(201).json(newClass)
})

export const getClasses = catchAsync(async(req,res,next)=>{
    const classes = await Class.find({}).populate("classTeacher")
     return res.status(200).json(classes)
})

export const updateClass = catchAsync(async (req,res,next)=>{
    const updatedClasses = await Class.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    return res.status(200).json(updatedClasses)
})

export const removeClass = catchAsync(async(req,res,next)=>{
    await Class.findByIdAndDelete(req.params.id);
    return res.status(200).json({message:"Class removed successfully."})
})