import mongoose from 'mongoose';
import validator from 'validator'
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required."]
    },
    email:{
        type:String,
        required:[true,"Email is required."],
        unique:[true,"Email already exists"],
        validate:[validator.isEmail,"Please enter valid email address."]
    },
    rollNumber: {
      type: String,
      required:[true,"Roll No. is required."],
      unique: true,
    },
    className: {
      type: String,
      required:[true,"Class is required."],
    },
    section: {
      type: String,
      required:[true,"Section is required."],
    },
     guardianName: {
      type: String,
    },

    guardianPhone: {
      type: String,
    },
    address: {
      type: String,
    },
},{timestamps:true})
export default mongoose.model("Student",studentSchema)