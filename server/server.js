import dotenv from 'dotenv'
import app from './app.js'
import  { dbConnect } from './config/dbConnection.js'
dotenv.config({path:"server/config/config.env"})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
  dbConnect();
});