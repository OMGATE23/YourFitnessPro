const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./config/db')
const userRoute = require('./routes/user')
const splitRoute = require('./routes/split')
const exerciseRoute = require('./routes/exercise')
const cors = require('cors')
app.use(cors())

connectToDB()
app.use(express.json())


app.use('/user' , userRoute)
app.use('/split' , splitRoute)
app.use('/exercise' , exerciseRoute)
app.listen(process.env.PORT, () => {
    console.log("Server is running on port" , process.env.PORT);
  });
