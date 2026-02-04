import Teacher from "../models/teacher.model.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createTeacher = catchAsync(async(req,res,next)=>{
    const teacher = await Teacher.create(req.body);
    return res.status(201).json(teacher)
})
export const getTeachers = catchAsync(async(req,res,next)=>{
    const teachers = await Teacher.find({});
    return res.status(200).json(teachers)
})
export const updateTeacher = catchAsync(async(req,res,next)=>{
    const teacher = await Teacher.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    return res.status(200).json(teacher)
})
export const removeTeacher = catchAsync(async(req,res,next)=>{
    await Teacher.findByIdAndDelete(req.params.id);
    return res.status(200).json({message:"Teacher removed successfully."})
})