import Student from "../models/student.model.js";
import { catchAsync } from "../utils/catchAsync.js";
import ApiError from "../utils/customError.js";

export const createStudent = catchAsync(async(req,res,next)=>{
   const student =  await Student.create(req.body);
    return res.status(201).json(student)
})

export const getStudents = catchAsync(async(req,res,next)=>{
    const students = await Student.find({});
    
    return res.status(200).json(students)
})

export const updateStudent = catchAsync(async(req,res,next)=>{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!student){
        return next(new ApiError(404,"Student not found."))
    }
    return res.status(200).json(student)
})

export const removeStudent = catchAsync(async(req,res,next)=>{
    await Student.findByIdAndDelete(req.params.id);
    return res.status(200).json({message:"Student removed successfully."})
})