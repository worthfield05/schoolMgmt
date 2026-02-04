import mongoose from 'mongoose';
import validator from 'validator'
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required."]
    },
    email:{
        type:String,
        required:[true,"Email is required."],
        unique:[true,"Email already exists"],
        validate:[validator.isEmail,"Please enter valid email."]
    },
    phone:String,
    qualification:String,
    experience:Number,
    subjectSpecialization:String
},{timestamps:true})
export default mongoose.model("Teacher",teacherSchema)