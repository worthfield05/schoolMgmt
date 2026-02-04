import Subject from "../models/subject.model.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createSubject = catchAsync(async(req,res,next)=>{
    const subject = await Subject.create(req.body);
    return res.status(201).json(subject)
})
export const getSubjects = catchAsync(async(req,res,next)=>{
    const subjects = await Subject.find().populate("classTeacher").populate("teacherAssigned")
    return res.status(200).json(subjects)
})
