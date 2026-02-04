import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import validator from 'validator'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email already exists"],
        validate:[validator.isEmail,"Please enter valid email address"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6, "Password should not be less than 6 character"],
        select:false
    },
    role:{
        type:String,
        enum:["admin","teacher","student","parent"],
        default:"student"
    }
},{timestamps:true})


userSchema.pre("save",function(){
    if(!this.isModified("password")) return;
    this.password = bcrypt.hashSync(this.password,10);
    return;
})
userSchema.methods.comparePassword = async function(plaintext){
    return await bcrypt.compare(plaintext,this.password)
}

userSchema.methods.setJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
           expiresIn: process.env.JWT_TOKEN_EXPIRE,
    })
}
export default mongoose.model("User",userSchema)