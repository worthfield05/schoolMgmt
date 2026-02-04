import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.route.js'
import studentRoute from './routes/student.route.js'
import teacherRoute from './routes/teacher.route.js'
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
dotenv.config({path:"./config/config.env"})
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/student",studentRoute)
app.use("/api/teacher",teacherRoute)
app.use(errorMiddleware)
export default app;