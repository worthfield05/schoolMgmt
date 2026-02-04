import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.route.js'
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
dotenv.config({path:"./config/config.env"})
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
// Debug middleware to see all cookies
app.use((req, res, next) => {
  console.log('=== COOKIE DEBUG ===');
  console.log('Cookies:', req.cookies);
  console.log('Signed Cookies:', req.signedCookies);
  console.log('Headers:', req.headers.cookie);
  console.log('=== END DEBUG ===');
  next();
});
app.use("/api/auth",authRoute)
app.use(errorMiddleware)
export default app;