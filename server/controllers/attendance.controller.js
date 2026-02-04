import Attendance from "../models/attendance.model.js";
import { catchAsync } from "../utils/catchAsync.js";

export const markAttendance = catchAsync(async(req,res,next)=>{
    const attendance = await Attendance.create(req.body);
    return res.status(201).json(attendance)
})
export const getAttendance = catchAsync(async(req,res,next)=>{
    const attendances = await Attendance.find().populate("student").populate("classId");
    return res.status(200).json(attendances)
})